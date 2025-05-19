import { ContextualMenuItemType } from '@fluentui/react';

const items: any[] = [];

items.push(
  { key: 'newItem', text: 'New', onClick: () => console.log('New clicked') },
  { key: 'divider_1', itemType: ContextualMenuItemType.Divider },
  { key: 'rename', text: 'Rename', onClick: () => console.log('Rename clicked') },
  { key: 'edit', text: 'Edit', onClick: () => console.log('Edit clicked') },
  { key: 'properties', text: 'Properties', onClick: () => console.log('Properties clicked') },
  { key: 'linkNoTarget', text: 'Link same window', href: 'http://bing.com' },
  { key: 'linkWithTarget', text: 'Link new window', href: 'http://bing.com', target: '_blank' }
);
