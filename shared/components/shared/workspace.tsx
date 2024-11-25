"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { WorkspaceForm } from "./workspace/workspace-form";
import { WorkspaceHeader } from "./workspace/workspace-header";

import "./style.css";

interface Props {}

const TITLE =
  "STSK0004783 На инциденте, запросе, проблеме, в статусе закрыто некоторые поля остаются редактируемыми для агента если он Caller";

export const Workspace: React.FC<Props> = () => {
  const [isStickyClassName, setIsStickyClassName] = useState("");
  const headerWorkspaceFormRef = useRef(null);

  const handleScroll = () => {
    const currentHeaderRef: any = headerWorkspaceFormRef.current;
    const offset = currentHeaderRef.scrollY;

    if (offset > 0) {
      setIsStickyClassName("");
    } else {
      setIsStickyClassName("workspace-form--scroll-fix");
    }
  };

  useLayoutEffect(() => {
    const currentHeaderRef: any = headerWorkspaceFormRef.current;
    if (currentHeaderRef) {
      currentHeaderRef.addEventListener("scroll", handleScroll);

      return () => {
        currentHeaderRef.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  return (
    <section ref={headerWorkspaceFormRef} className="workspace">
      <WorkspaceHeader className={isStickyClassName} />
      <WorkspaceForm title={TITLE} />
    </section>
  );
};
