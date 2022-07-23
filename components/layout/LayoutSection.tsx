import { BaseReactProps } from "@src/common";
import { classNames } from "@src/utils";

interface ILayoutSectionProps extends BaseReactProps {}

export function Section(props: ILayoutSectionProps) {
  return (
    <section className={classNames("max-w-6xl mx-auto", props.className!)}>
      {props.children}
    </section>
  );
}
