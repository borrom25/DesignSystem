import { HeadBlock } from "../../ui/head-block/HeadBlock.tsx";
import { rootText } from "../../model/contants.ts";

export const RootOther = () => {
  return (
    <div>
      <HeadBlock
        title={rootText.other.title}
        description={rootText.other.description}
      />
    </div>
  );
};
