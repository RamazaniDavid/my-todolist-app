import React, {  useReducer } from "react";

const Tab = ({ children, initTabIndex = 0, onSelectedTabChanged }) => {
  const [activeTab, setActiveTab] = useReducer((oldTab, newTab) => {
    if (onSelectedTabChanged && typeof onSelectedTabChanged === "function") {
      onSelectedTabChanged({
        oldTab,
        newTab,
      });
    }
    return newTab;
  }, initTabIndex);

  const tabArray = React.Children.toArray(children);
  return (
    <>
      <ul className="nav nav-tabs mb-4 pb-2" id="ex1" role="tablist">
        {tabArray
          .filter((child) => child.props.label && child.props.label.length > 0)
          .map((child, ix) => {
            const { label } = child.props;

            return (
              <li key={ix} className="nav-item pointer" role="presentation">
                <span
                  className={`nav-link pointer ${
                    activeTab === ix ? "active" : ""
                  }`}
                  id={ix}
                  data-mdb-toggle="tab"
                  role="tab"
                  onClick={() => setActiveTab(ix)}
                >
                  {label}
                </span>
              </li>
            );
          })}
      </ul>

      <div className="tab-content">
        <div className="tab-pane fade show active" role="tabpanel">
          {tabArray
            .filter(
              (child) => child.props.label && child.props.label.length > 0
            )
            .map((child, ix) => {
              if (ix !== activeTab) return undefined;
              return child.props.children;
            })}{" "}
        </div>
      </div>
    </>
  );
};

export default Tab;
