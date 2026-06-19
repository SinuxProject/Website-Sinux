import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docsSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Architecture',
      collapsed: false,
      items: [
        'architecture/overview',
        'architecture/boot-flow',
        'architecture/memory-layout',
      ],
    },
    {
      type: 'category',
      label: 'Syscalls',
      collapsed: false,
      items: [
        'syscalls/abi',
        'syscalls/table',
      ],
    },
    {
      type: 'category',
      label: 'Building & Running',
      collapsed: false,
      items: [
        'building/dependencies',
        'building/build',
        'building/running',
      ],
    },
  ],
};

export default sidebars;
