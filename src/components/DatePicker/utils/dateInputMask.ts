type DateFormatPart = {
  key: string;
  length: number;
};

function parseFormat(formatPattern: string) {
  const separator = formatPattern.match(/[^a-zA-Z]/)?.[0] || ".";
  const parts = formatPattern.split(separator).map((part) => ({
    key: part.toLowerCase(),
    length: part.length,
  }));

  return { separator, parts };
}

function clampPart(raw: string, max: number) {
  const value = parseInt(raw, 10);
  if (value > max) return String(max);
  if (value < 1 && raw.length === 2) return "01";
  return raw;
}

function validateSegment(key: string, rawPart: string) {
  if (!rawPart) return rawPart;
  if (key === "dd") return clampPart(rawPart, 31);
  if (key === "mm") return clampPart(rawPart, 12);
  return rawPart;
}

function trimTrailingEmpty(segments: string[]) {
  const next = [...segments];
  while (next.length && !next[next.length - 1]) next.pop();
  return next;
}

function joinSegments(segments: string[], separator: string) {
  return trimTrailingEmpty(segments).join(separator);
}

function padSegments(segments: string[], partsLength: number) {
  const next = segments.slice(0, partsLength);
  return [...next, ...Array(partsLength - next.length).fill("")];
}

function setSegment(
  segments: string[],
  parts: DateFormatPart[],
  index: number,
  value: string
) {
  const next = [...segments];
  next[index] = validateSegment(
    parts[index].key,
    value.slice(0, parts[index].length)
  );
  return next;
}

function toSegments(value: string, formatPattern: string) {
  const { separator, parts } = parseFormat(formatPattern);
  let rawSegments: string[];

  if (value.includes(separator)) {
    rawSegments = padSegments(value.split(separator), parts.length);
  } else {
    const numbers = value.replace(/\D/g, "");
    let position = 0;
    rawSegments = parts.map((part) => {
      const slice = numbers.slice(position, position + part.length);
      position += part.length;
      return slice;
    });
  }

  const segments = parts.map((part, index) =>
    validateSegment(
      part.key,
      rawSegments[index].replace(/\D/g, "").slice(0, part.length)
    )
  );

  return { segments, separator, parts };
}

export function formatDateText(
  value: string | undefined,
  formatPattern: string
) {
  if (!value) return "";
  const { segments, separator } = toSegments(value, formatPattern);
  return joinSegments(segments, separator);
}

function caretToSegment(
  caret: number,
  segments: string[],
  separator: string
): { segmentIndex: number; offset: number } {
  let remaining = caret;

  for (let index = 0; index < segments.length; index++) {
    const segment = segments[index];
    if (remaining <= segment.length) {
      return { segmentIndex: index, offset: remaining };
    }

    remaining -= segment.length;

    if (index < segments.length - 1) {
      if (remaining === 0) {
        return { segmentIndex: index, offset: segment.length };
      }
      remaining -= separator.length;
    }
  }

  const lastIndex = segments.length - 1;
  return {
    segmentIndex: lastIndex,
    offset: segments[lastIndex].length,
  };
}

function caretFromSegments(
  segments: string[],
  segmentIndex: number,
  offset: number,
  separator: string
) {
  const displaySegments = trimTrailingEmpty(segments);
  if (!displaySegments.length) return 0;

  const maxIndex = displaySegments.length - 1;
  const safeIndex = Math.min(segmentIndex, maxIndex);
  const safeOffset =
    segmentIndex > maxIndex
      ? displaySegments[maxIndex].length
      : Math.min(offset, displaySegments[safeIndex].length);

  let caret = 0;
  for (let index = 0; index < safeIndex; index++) {
    caret += displaySegments[index].length + separator.length;
  }

  return caret + safeOffset;
}

function clearSelection(
  segments: string[],
  parts: DateFormatPart[],
  separator: string,
  selectionStart: number,
  selectionEnd: number
) {
  const start = caretToSegment(selectionStart, segments, separator);
  const end = caretToSegment(selectionEnd, segments, separator);
  let next = [...segments];

  for (let index = start.segmentIndex; index <= end.segmentIndex; index++) {
    const segment = next[index];
    const from = index === start.segmentIndex ? start.offset : 0;
    const to = index === end.segmentIndex ? end.offset : segment.length;
    next = setSegment(
      next,
      parts,
      index,
      segment.slice(0, from) + segment.slice(to)
    );
  }

  return {
    segments: next,
    segmentIndex: start.segmentIndex,
    offset: start.offset,
  };
}

function resolveDeleteTarget(
  key: "Backspace" | "Delete",
  segments: string[],
  parts: DateFormatPart[],
  segmentIndex: number,
  offset: number
) {
  if (key === "Backspace") {
    if (offset > 0) return { segmentIndex, offset: offset - 1 };
    if (segmentIndex === 0) return null;
    const prev = segmentIndex - 1;
    return {
      segmentIndex: prev,
      offset: Math.max(0, segments[prev].length - 1),
    };
  }

  if (offset < segments[segmentIndex].length) {
    return { segmentIndex, offset };
  }
  if (segmentIndex >= parts.length - 1) return null;
  return { segmentIndex: segmentIndex + 1, offset: 0 };
}

export function editDateText({
  value,
  selectionStart,
  selectionEnd,
  key,
  format: formatPattern,
}: {
  value: string;
  selectionStart: number;
  selectionEnd: number;
  key: string;
  format: string;
}) {
  const { segments, separator, parts } = toSegments(value, formatPattern);
  const start = Math.min(selectionStart, selectionEnd);
  const end = Math.max(selectionStart, selectionEnd);

  let workingSegments = segments;
  let caretSegment = 0;
  let caretOffset = 0;

  if (start !== end) {
    const cleared = clearSelection(segments, parts, separator, start, end);
    workingSegments = cleared.segments;
    caretSegment = cleared.segmentIndex;
    caretOffset = cleared.offset;
  } else {
    const position = caretToSegment(start, workingSegments, separator);
    caretSegment = position.segmentIndex;
    caretOffset = position.offset;
  }

  if (start === end && (key === "Backspace" || key === "Delete")) {
    const target = resolveDeleteTarget(
      key,
      workingSegments,
      parts,
      caretSegment,
      caretOffset
    );

    if (target) {
      const segment = workingSegments[target.segmentIndex];
      workingSegments = setSegment(
        workingSegments,
        parts,
        target.segmentIndex,
        segment.slice(0, target.offset) + segment.slice(target.offset + 1)
      );
      caretSegment = target.segmentIndex;
      caretOffset = target.offset;
    }
  }

  if (/^\d$/.test(key)) {
    while (
      caretOffset >= parts[caretSegment].length &&
      caretSegment < parts.length - 1
    ) {
      caretSegment += 1;
      caretOffset = 0;
    }

    const part = parts[caretSegment];
    const segment = workingSegments[caretSegment];
    const insertOffset = segment.length < part.length ? 0 : 1;

    workingSegments = setSegment(
      workingSegments,
      parts,
      caretSegment,
      segment.slice(0, caretOffset) +
        key +
        segment.slice(caretOffset + insertOffset)
    );

    caretOffset = Math.min(
      caretOffset + 1,
      workingSegments[caretSegment].length
    );

    if (caretOffset >= part.length && caretSegment < parts.length - 1) {
      caretSegment += 1;
      caretOffset = 0;
    }
  }

  return {
    value: joinSegments(workingSegments, separator),
    caret: caretFromSegments(
      workingSegments,
      caretSegment,
      caretOffset,
      separator
    ),
  };
}
