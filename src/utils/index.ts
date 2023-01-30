import type {MenuProps} from 'antd';
import React from 'react';

type MenuItem = Required<MenuProps>['items'][number];

export function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem {
  return {key, icon, children, label, type,} as MenuItem;
}

export function getYearAndMonth(date: Date | string): string {
  if(typeof date === "string"){
    date = new Date(date);
  }
  return `${date.getFullYear()}.${date.getMonth() + 1}`
}
