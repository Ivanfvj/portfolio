import { BaseReactProps } from "../../common/index";

interface LayoutContainerProps extends BaseReactProps {}

export const LayoutBox = (props: LayoutContainerProps) => {
  return <div className="max-w-6xl mx-auto">{props.children}</div>;
};
