import React, { useEffect, useState } from "react";

const Tab = ({ children, selectedTabIndex }) => {
  const [activeTab, setActiveTab] = useState(0);
  useEffect(() => {
    setActiveTab(selectedTabIndex);
  }, [selectedTabIndex]);
  const tabArray = React.Children.toArray(children);
  return (
    <>
      <ul className="nav nav-tabs mb-4 pb-2" id="ex1" role="tablist">
        {tabArray
          .filter((child) => child.props.label && child.props.label.length > 0)
          .map((child, ix) => {
            const { label } = child.props;

            return (
              <li key={ix} className="nav-item" role="presentation">
                <span
                  className={`nav-link ${activeTab === ix ? "active" : ""}`}
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
