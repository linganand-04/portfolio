import {
  FileCode2,
  Palette,
  Braces,
  Component,
  Wind,
  LayoutGrid,
  Server,
  Webhook,
  Cable,
  Coffee,
  Terminal,
  Database,
  Leaf,
  Code2,
  PenTool,
  Package,
  GitBranch,
  FolderGit2,
  Smartphone,
  Layers,
} from "lucide-react";

// Explicit map (rather than `import *`) keeps the icon set tree-shakeable,
// so only the icons actually used ship in the production bundle.
const ICON_MAP = {
  FileCode2,
  Palette,
  Braces,
  Component,
  Wind,
  LayoutGrid,
  Server,
  Webhook,
  Cable,
  Coffee,
  Terminal,
  Database,
  Leaf,
  Code2,
  PenTool,
  Package,
  GitBranch,
  FolderGit2,
  Smartphone,
  Layers,
};

/**
 * Resolves an icon component from its string name (as stored in data files),
 * falling back to Code2 if the name isn't found.
 */
export function getIcon(name) {
  return ICON_MAP[name] || Code2;
}
