import { useState } from "react";
import { TabType } from "../types/tab";

export const useTab: (
  defaultValue: TabType
) => [TabType, (nextActiveTab: TabType) => void] = defaultValue => {
  const [activeTab, setActiveTab] = useState<TabType>(defaultValue);

  const handleTab = (nextActiveTab: TabType) => {
    setActiveTab(nextActiveTab);
  };

  return [activeTab, handleTab];
};
