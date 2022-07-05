import Link from "next/link";
import React from "react";

export interface WithLinkProps {
  href: string;
  noAnchor?: boolean;
}

export function withLink<T>(
  WrappedComponent: React.ComponentType<T & WithLinkProps>
) {
  const displayName =
    WrappedComponent.displayName || WrappedComponent.name || "Component";

  const ComponentWithLink = (props: T & WithLinkProps) => {
    return (
      <Link href={props.href} passHref>
        {props.noAnchor ? (
          <WrappedComponent {...props} />
        ) : (
          <a>
            <WrappedComponent {...props} />
          </a>
        )}
      </Link>
    );
  };

  ComponentWithLink.displayName = `withLink(${displayName})`;

  return ComponentWithLink;
}
