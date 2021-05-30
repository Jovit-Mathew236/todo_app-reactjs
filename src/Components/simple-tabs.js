import React from "react";
import { Tabs, useTabState, Panel } from "@bumaga/tabs";

const cn = (...args) => args.filter(Boolean).join(" ");

const Tab = ({ children }) => {
  const { isActive, onClick } = useTabState();

  return (
    <button className={cn("", isActive && "")} onClick={onClick}>
      {children}
    </button>
  );
};

const Todo = (props) => (
  <Tabs>
    <div className="tabs">
      <div className="tab-list">
        <Tab>Active Todos</Tab>

        <Tab>Complited Todos</Tab>

        <Tab>Removed</Tab>
      </div>

      <div className="tab-progress" />

      <Panel>
        <p>{props.Active}</p>
      </Panel>

      <Panel>
        <p>{props.Completed}</p>
      </Panel>

      <Panel>
        <p>{props.Removed}</p>
      </Panel>
    </div>
  </Tabs>
);

export default Todo;
