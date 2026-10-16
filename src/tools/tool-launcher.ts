/**
 * DeveloperOS QuickTools — Tool 10: Searchable Tool Launcher
 * Instant discovery and launcher for 25+ DeveloperOS web suites, tools, and repositories.
 */

export interface RegistryTool {
  id: string;
  name: string;
  category: string;
  short_description: string;
  long_description: string;
  parent_suite: string;
  live_url: string | null;
  repository_url: string;
  seo_slug: string;
  framework: string;
  hosting_provider: string;
  availability_status: string;
  privacy_classification: string;
  version: string;
  last_verified_date: string;
}

export function searchTools(
  tools: RegistryTool[],
  query: string,
  selectedCategory: string = 'All'
): RegistryTool[] {
  const q = (query || '').toLowerCase().trim();
  const cat = (selectedCategory || 'All').trim();

  return tools.filter(tool => {
    // Category check
    if (cat !== 'All' && tool.category.toLowerCase() !== cat.toLowerCase()) {
      return false;
    }

    // Search query check
    if (!q) return true;

    const suiteName = typeof tool.parent_suite === 'string'
      ? tool.parent_suite
      : (tool.parent_suite?.name || tool.parent_suite?.id || '');

    return (
      tool.name.toLowerCase().includes(q) ||
      tool.short_description.toLowerCase().includes(q) ||
      tool.category.toLowerCase().includes(q) ||
      suiteName.toLowerCase().includes(q) ||
      tool.seo_slug.toLowerCase().includes(q)
    );
  });
}

export function getCategories(tools: RegistryTool[]): string[] {
  const set = new Set<string>();
  tools.forEach(t => set.add(t.category));
  return ['All', ...Array.from(set).sort()];
}

export function resolveLaunchUrl(tool: RegistryTool): string {
  // If the live URL has been verified, launch it
  if (tool.live_url && tool.live_url.startsWith('https://')) {
    return tool.live_url;
  }
  // Otherwise open the static SEO landing page on toolkit.developeros.in
  return `https://toolkit.developeros.in/tools/${tool.seo_slug}.html`;
}

export function openExternalUrl(url: string): void {
  if (typeof chrome !== 'undefined' && chrome.tabs && typeof chrome.tabs.create === 'function') {
    chrome.tabs.create({ url });
  } else if (typeof window !== 'undefined' && window.open) {
    window.open(url, '_blank', 'noopener,noreferrer');
  }
}
