"use client";

import {
  AlertCircle,
  ArrowLeft,
  ArrowUp,
  ArrowUpRight,
  Bold,
  Calculator,
  CalendarIcon,
  Check,
  CheckCircle,
  ChevronDown,
  ChevronsUpDown,
  Grid,
  HelpCircle,
  Info,
  Italic,
  Layers,
  LayoutGrid,
  List,
  Mail,
  Menu,
  Moon,
  Pencil,
  Plus,
  Search,
  Settings,
  Sliders,
  Smile,
  Sun,
  Table as TableIcon,
  Trash2,
  TrendingUp,
  Underline,
  User,
  X,
  XCircle,
  Loader2,
} from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

import { Section, ComponentCard } from "@/components/showcase";
import { ThemeSelector } from "@/components/theme-selector";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Textarea } from "@/components/ui/textarea";
import { Skeleton } from "@/components/ui/skeleton";
import { Switch } from "@/components/ui/switch";
import { Avatar as ShadcnAvatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card as ShadcnCard, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
} from "@/components/ui/sheet";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
} from "@/components/ui/context-menu";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Button } from "@/components/ui/button";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { Toggle } from "@/components/ui/toggle";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput, InputGroupText, InputGroupTextarea } from "@/components/ui/input-group";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Progress } from "@/components/ui/progress";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Kbd } from "@/components/ui/kbd";
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";
import { toast } from "sonner";

/* ========================================================================
   DEMO DATA
   ======================================================================== */

// Student management demo data
const demoProducts = [
  { id: 1, name: "Advanced Mathematics Course", category: "Mathematics", price: 149, stock: 35, status: "In Stock" },
  { id: 2, name: "Web Development Bootcamp", category: "Computer Science", price: 299, stock: 42, status: "In Stock" },
  { id: 3, name: "Physics Lab Equipment Kit", category: "Science", price: 89, stock: 18, status: "In Stock" },
  { id: 4, name: "Academic Writing Workshop", category: "Language Arts", price: 79, stock: 0, status: "Out of Stock" },
  { id: 5, name: "Chemistry Study Bundle", category: "Science", price: 129, stock: 25, status: "In Stock" },
  { id: 6, name: "Digital Art & Design Course", category: "Arts", price: 199, stock: 8, status: "Low Stock" },
  { id: 7, name: "Study Planner Pro Toolkit", category: "Productivity", price: 49, stock: 5, status: "Low Stock" },
  { id: 8, name: "Data Science Fundamentals", category: "Computer Science", price: 249, stock: 52, status: "In Stock" },
];

// Chart data for different time ranges - student engagement metrics
const chartData = {
  day: [
    { label: "6AM", value: 8 },
    { label: "9AM", value: 45 },
    { label: "12PM", value: 62 },
    { label: "3PM", value: 78 },
    { label: "6PM", value: 54 },
    { label: "9PM", value: 42 },
  ],
  week: [
    { label: "Mon", value: 234 },
    { label: "Tue", value: 278 },
    { label: "Wed", value: 312 },
    { label: "Thu", value: 298 },
    { label: "Fri", value: 256 },
    { label: "Sat", value: 189 },
    { label: "Sun", value: 145 },
  ],
  month: [
    { label: "Week 1", value: 1024 },
    { label: "Week 2", value: 1156 },
    { label: "Week 3", value: 978 },
    { label: "Week 4", value: 1289 },
  ],
  year: [
    { label: "Jan", value: 3240 },
    { label: "Feb", value: 2890 },
    { label: "Mar", value: 4100 },
    { label: "Apr", value: 3980 },
    { label: "May", value: 2800 },
    { label: "Jun", value: 1950 },
    { label: "Jul", value: 1200 },
    { label: "Aug", value: 2100 },
    { label: "Sep", value: 4250 },
    { label: "Oct", value: 4580 },
    { label: "Nov", value: 4120 },
    { label: "Dec", value: 3690 },
  ],
};

function ToggleGroupDemo() {
  const [viewMode, setViewMode] = useState("grid");
  const [timeRange, setTimeRange] = useState("week");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;
  
  // Pagination logic
  const totalPages = Math.ceil(demoProducts.length / itemsPerPage);
  const paginatedProducts = demoProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "In Stock":
        return <Badge className="text-xs">{status}</Badge>;
      case "Out of Stock":
        return <Badge variant="outline" className="text-xs">{status}</Badge>;
      case "Low Stock":
        return <Badge variant="secondary" className="text-xs">{status}</Badge>;
      default:
        return <Badge className="text-xs">{status}</Badge>;
    }
  };

  // Get chart data for current time range
  const currentChartData = chartData[timeRange as keyof typeof chartData];
  const maxValue = Math.max(...currentChartData.map(d => d.value));

  return (
    <div className="flex flex-col gap-6 w-full">
      {/* View Mode Toggle with Real Data Display */}
      <div className="space-y-3">
        <ToggleGroup type="single" value={viewMode} onValueChange={(val) => { if (val) { setViewMode(val); setCurrentPage(1); } }} className="flex gap-2">
          <ToggleGroupItem value="grid" aria-label="Grid view" className="px-3 py-1.5">
            <Grid className="h-4 w-4" />
            <span className="ml-2 text-sm">Grid</span>
          </ToggleGroupItem>
          <ToggleGroupItem value="list" aria-label="List view" className="px-3 py-1.5">
            <List className="h-4 w-4" />
            <span className="ml-2 text-sm">List</span>
          </ToggleGroupItem>
          <ToggleGroupItem value="table" aria-label="Table view" className="px-3 py-1.5">
            <TableIcon className="h-4 w-4" />
            <span className="ml-2 text-sm">Table</span>
          </ToggleGroupItem>
        </ToggleGroup>
        
        {/* Grid View */}
        {viewMode === "grid" && (
          <div className="grid grid-cols-2 gap-3">
            {paginatedProducts.map((product) => (
              <div key={product.id} className="rounded-lg border border-border bg-card p-3 transition hover:shadow-md">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted">
                    <LayoutGrid size={18} className="text-muted-foreground" />
                  </div>
                  {getStatusBadge(product.status)}
                </div>
                <h4 className="text-sm font-semibold truncate">{product.name}</h4>
                <p className="text-xs text-muted-foreground">{product.category}</p>
                <div className="mt-2 flex items-center justify-between">
                  <span className="text-sm font-bold text-primary">${product.price}</span>
                  <span className="text-xs text-muted-foreground">{product.stock} units</span>
                </div>
              </div>
            ))}
          </div>
        )}
        
        {/* List View */}
        {viewMode === "list" && (
          <div className="flex flex-col gap-2">
            {paginatedProducts.map((product) => (
              <div key={product.id} className="flex items-center gap-3 rounded-lg border border-border bg-card p-3 transition hover:bg-muted/50">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted shrink-0">
                  <LayoutGrid size={18} className="text-muted-foreground" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-semibold truncate">{product.name}</h4>
                  <p className="text-xs text-muted-foreground">{product.category} · {product.stock} in stock</p>
                </div>
                <div className="flex items-center gap-3 shrink-0">
                  {getStatusBadge(product.status)}
                  <span className="text-sm font-bold text-primary">${product.price}</span>
                </div>
              </div>
            ))}
          </div>
        )}
        
        {/* Table View */}
        {viewMode === "table" && (
          <div className="rounded-lg border border-border overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="bg-muted/50">
                  <TableHead className="text-xs font-semibold">Product</TableHead>
                  <TableHead className="text-xs font-semibold">Category</TableHead>
                  <TableHead className="text-xs font-semibold text-right">Price</TableHead>
                  <TableHead className="text-xs font-semibold text-right">Stock</TableHead>
                  <TableHead className="text-xs font-semibold">Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {paginatedProducts.map((product) => (
                  <TableRow key={product.id} className="hover:bg-muted/50">
                    <TableCell className="text-sm font-medium">{product.name}</TableCell>
                    <TableCell className="text-sm text-muted-foreground">{product.category}</TableCell>
                    <TableCell className="text-sm font-semibold text-primary text-right">${product.price}</TableCell>
                    <TableCell className="text-sm text-muted-foreground text-right">{product.stock}</TableCell>
                    <TableCell>{getStatusBadge(product.status)}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        )}
        
        {/* Pagination */}
        <div className="flex items-center justify-between pt-2">
          <p className="text-xs text-muted-foreground">
            Showing {(currentPage - 1) * itemsPerPage + 1}-{Math.min(currentPage * itemsPerPage, demoProducts.length)} of {demoProducts.length}
          </p>
          <div className="flex gap-1">
            <button
              onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="flex h-8 w-8 items-center justify-center rounded-lg border border-border bg-background text-muted-foreground transition hover:bg-muted disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ArrowLeft size={14} />
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`flex h-8 w-8 items-center justify-center rounded-lg text-xs font-medium transition ${
                  currentPage === page
                    ? "bg-primary text-primary-foreground"
                    : "border border-border bg-background text-muted-foreground hover:bg-muted"
                }`}
              >
                {page}
              </button>
            ))}
            <button
              onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="flex h-8 w-8 items-center justify-center rounded-lg border border-border bg-background text-muted-foreground transition hover:bg-muted disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ArrowUpRight size={14} className="rotate-45" />
            </button>
          </div>
        </div>
      </div>
      
      {/* Time Range Toggle with Chart */}
      <div className="space-y-3">
        <ToggleGroup type="single" value={timeRange} onValueChange={(val) => val && setTimeRange(val)} className="flex gap-2">
          <ToggleGroupItem value="day" className="px-3 py-1.5">Day</ToggleGroupItem>
          <ToggleGroupItem value="week" className="px-3 py-1.5">Week</ToggleGroupItem>
          <ToggleGroupItem value="month" className="px-3 py-1.5">Month</ToggleGroupItem>
          <ToggleGroupItem value="year" className="px-3 py-1.5">Year</ToggleGroupItem>
        </ToggleGroup>
        
        {/* Bar Chart */}
        <div className="rounded-lg border border-border bg-card p-4">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h4 className="text-sm font-semibold">Student Activity Overview</h4>
              <p className="text-xs text-muted-foreground">
                {timeRange === "day" && "Today's hourly active students"}
                {timeRange === "week" && "This week's daily active students"}
                {timeRange === "month" && "This month's weekly active students"}
                {timeRange === "year" && "This year's monthly active students"}
              </p>
            </div>
            <div className="text-right">
              <p className="text-lg font-bold text-primary">
                ${currentChartData.reduce((sum, d) => sum + d.value, 0).toLocaleString()}
              </p>
              <p className="text-xs text-green-600">
                <TrendingUp size={12} className="inline mr-1" />
                +12.5% vs last {timeRange}
              </p>
            </div>
          </div>
          
          {/* Chart Bars */}
          <div className="flex items-end justify-between gap-2 h-32">
            {currentChartData.map((data, index) => (
              <div key={index} className="flex-1 flex flex-col items-center gap-1">
                <div 
                  className="w-full rounded-t-md bg-gradient-to-t from-primary to-primary/80 transition-all duration-500 hover:opacity-90"
                  style={{ 
                    height: `${(data.value / maxValue) * 100}%`,
                    minHeight: "8px"
                  }}
                  title={`${data.label}: $${data.value}`}
                />
                <span className="text-[10px] text-muted-foreground truncate w-full text-center">{data.label}</span>
              </div>
            ))}
          </div>
          
          {/* Chart Legend */}
          <div className="flex items-center justify-center gap-4 mt-4 pt-3 border-t border-border">
            <div className="flex items-center gap-1.5">
              <div className="h-2.5 w-2.5 rounded-full bg-primary" />
              <span className="text-xs text-muted-foreground">Sales ($)</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="h-2.5 w-2.5 rounded-full bg-green-600" />
              <span className="text-xs text-muted-foreground">Growth</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ========================================================================
   COMBOBOX DEMO COMPONENT
   ======================================================================== */

const frameworks = [
  { value: "next.js", label: "Next.js" },
  { value: "sveltekit", label: "SvelteKit" },
  { value: "nuxt.js", label: "Nuxt.js" },
  { value: "remix", label: "Remix" },
  { value: "astro", label: "Astro" },
];

function ComboboxDemo() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {value
            ? frameworks.find((framework) => framework.value === value)?.label
            : "Select framework..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search framework..." />
          <CommandList>
            <CommandEmpty>No framework found.</CommandEmpty>
            <CommandGroup>
              {frameworks.map((framework) => (
                <CommandItem
                  key={framework.value}
                  value={framework.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    setOpen(false);
                  }}
                >
                  <Check
                    className={`mr-2 h-4 w-4 ${
                      value === framework.value ? "opacity-100" : "opacity-0"
                    }`}
                  />
                  {framework.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}

/* ========================================================================
   DATE PICKER DEMO COMPONENT
   ======================================================================== */

function DatePickerDemo() {
  const [date, setDate] = useState<Date>();

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className={`w-[280px] justify-start text-left font-normal ${
            !date && "text-muted-foreground"
          }`}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? date.toLocaleDateString() : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}

/* ========================================================================
/* ========================================================================
   DARK MODE TOGGLE COMPONENT
   ======================================================================== */

function DarkModeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleToggle = (checked: boolean) => {
    setIsDarkMode(checked);
    if (checked) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <label className="flex cursor-pointer items-center justify-between gap-4 rounded-lg border border-border bg-card p-4 transition-all hover:border-primary/30 hover:shadow-sm">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-muted transition-colors">
            {isDarkMode ? (
              <Moon size={20} className="text-primary" />
            ) : (
              <Sun size={20} className="text-primary" />
            )}
          </div>
          <div>
            <p className="text-sm font-semibold">Dark Mode</p>
            <p className="text-xs text-muted-foreground">
              {isDarkMode ? "Currently using dark theme" : "Currently using light theme"}
            </p>
          </div>
        </div>
        <Switch
          checked={isDarkMode}
          onCheckedChange={handleToggle}
        />
      </label>
    </div>
  );
}

/* ========================================================================
   DATE PICKER DEMO COMPONENT
   ======================================================================== */

/* ========================================================================
   TABLE OF CONTENTS DATA
   ======================================================================== */

type TOCSubsection = {
  id: string;
  title: string;
};

type TOCSection = {
  id: string;
  title: string;
  subsections: TOCSubsection[];
};

function SidebarTOC({ sections, activeSection }: { sections: TOCSection[]; activeSection: string }) {
  return (
    <aside className="sticky top-24 hidden h-[calc(100vh-7rem)] xl:block">
      <div className="h-full overflow-hidden rounded-xl border border-border bg-card/80 shadow-sm backdrop-blur">
        <div className="flex items-center justify-between px-4 py-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
          <span>Components</span>
          <span className="text-[10px]">TOC</span>
        </div>
        <ScrollArea className="h-[calc(100vh-7rem)] px-4 pb-6">
          <nav className="space-y-5">
            {sections.map((section) => {
              const sectionActive =
                activeSection === section.id ||
                section.subsections.some((subsection) => subsection.id === activeSection);

              return (
                <div key={section.id} className="space-y-2">
                  <a
                    href={`#${section.id}`}
                    aria-current={sectionActive ? "location" : undefined}
                    className={`block text-sm font-semibold transition ${
                      sectionActive ? "text-primary" : "text-foreground hover:text-primary"
                    }`}
                  >
                    {section.title}
                  </a>

                  <div className="space-y-1 border-l border-border/60 pl-3">
                    {section.subsections.map((subsection) => {
                      const subsectionActive = activeSection === subsection.id;

                      return (
                        <a
                          key={subsection.id}
                          href={`#${subsection.id}`}
                          aria-current={subsectionActive ? "location" : undefined}
                          className={`block text-sm transition ${
                            subsectionActive
                              ? "text-primary font-medium"
                              : "text-muted-foreground hover:text-foreground"
                          }`}
                        >
                          {subsection.title}
                        </a>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </nav>
        </ScrollArea>
      </div>
    </aside>
  );
}

const tocSections: TOCSection[] = [
  {
    id: "typography",
    title: "Typography",
    subsections: [
      { id: "headings", title: "Headings" },
      { id: "body-text", title: "Body Text" },
    ],
  },
  {
    id: "color-palette",
    title: "Color Palette",
    subsections: [
      { id: "brand-colors", title: "Brand Colors" },
      { id: "status-colors", title: "Status Colors" },
    ],
  },
  {
    id: "theme",
    title: "Theme",
    subsections: [
      { id: "dark-mode", title: "Dark Mode" },
    ],
  },
  {
    id: "buttons",
    title: "Buttons",
    subsections: [
      { id: "primary-buttons", title: "Primary Buttons" },
      { id: "secondary-buttons", title: "Secondary Buttons" },
      { id: "ghost-buttons", title: "Ghost Buttons" },
      { id: "icon-buttons", title: "Icon Buttons" },
    ],
  },
  {
    id: "inputs",
    title: "Inputs",
    subsections: [
      { id: "text-input", title: "Text Input" },
      { id: "search-input", title: "Search Input" },
      { id: "select-dropdown", title: "Select Dropdown" },
      { id: "input-group", title: "Input Group" },
      { id: "textarea", title: "Textarea" },
      { id: "checkbox", title: "Checkbox" },
      { id: "radio-group", title: "Radio Group" },
      { id: "slider", title: "Slider" },
      { id: "calendar", title: "Calendar" },
      { id: "native-select", title: "Native Select" },
      { id: "kbd", title: "Keyboard Shortcut" },
      { id: "combobox", title: "Combobox" },
      { id: "date-picker", title: "Date Picker" },
    ],
  },
  {
    id: "tabs",
    title: "Tabs",
    subsections: [
      { id: "tabs-example", title: "Tabs Example" },
    ],
  },
  {
    id: "navigation",
    title: "Navigation",
    subsections: [
      { id: "breadcrumb", title: "Breadcrumb" },
    ],
  },
  {
    id: "badges",
    title: "Badges",
    subsections: [
      { id: "badge-variants", title: "Badge Variants" },
      { id: "badge-with-icons", title: "Badges with Icons" },
    ],
  },
  {
    id: "cards",
    title: "Cards",
    subsections: [
      { id: "card-examples", title: "Card Examples" },
    ],
  },
  {
    id: "avatars",
    title: "Avatars",
    subsections: [
      { id: "avatar-examples", title: "Avatar Examples" },
    ],
  },
  {
    id: "composite-components",
    title: "Composite Components",
    subsections: [
      { id: "accordion", title: "Accordion" },
    ],
  },
  {
    id: "feedback",
    title: "Feedback",
    subsections: [
      { id: "alerts", title: "Alerts" },
      { id: "alert-dialog", title: "Alert Dialog" },
      { id: "dialog", title: "Dialog" },
      { id: "spinner", title: "Spinner" },
      { id: "progress", title: "Progress" },
      { id: "skeleton", title: "Skeleton" },
      { id: "sonner", title: "Toast (Sonner)" },
    ],
  },
  {
    id: "controls",
    title: "Controls",
    subsections: [
      { id: "switch-toggle", title: "Switch Toggle" },
      { id: "toggle-group", title: "Toggle Group" },
      { id: "pagination", title: "Pagination" },
      { id: "divider", title: "Divider" },
    ],
  },
  {
    id: "overlays",
    title: "Overlays",
    subsections: [
      { id: "sheet", title: "Sheet" },
      { id: "drawer", title: "Drawer" },
      { id: "popover", title: "Popover" },
      { id: "context-menu", title: "Context Menu" },
      { id: "hovercard", title: "Hovercard" },
      { id: "tooltip", title: "Tooltip" },
    ],
  },
  {
    id: "layout",
    title: "Layout",
    subsections: [
      { id: "resizable", title: "Resizable Panels" },
    ],
  },
];

/* ========================================================================
   MAIN PAGE
   ======================================================================== */

export default function ComponentLibrary() {
  const [activeSection, setActiveSection] = useState("color-palette");

  // Scroll spy to detect active section
  useEffect(() => {
    const allIds = tocSections.flatMap((section) => [
      section.id,
      ...section.subsections.map((sub: { id: string }) => sub.id),
    ]);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries.filter((entry) => entry.isIntersecting);
        if (visibleEntries.length > 0) {
          const topEntry = visibleEntries.reduce((prev, current) => {
            return prev.boundingClientRect.top < current.boundingClientRect.top
              ? prev
              : current;
          });
          setActiveSection(topEntry.target.id);
        }
      },
      {
        rootMargin: "-100px 0px -60% 0px",
        threshold: 0,
      }
    );

    allIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="flex items-center gap-2 text-muted-foreground transition hover:text-primary"
            >
              <ArrowLeft size={18} />
              <span className="text-sm">Back to App</span>
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <Smile size={20} className="text-primary" />
            <span className="text-lg font-semibold">UI Component Library</span>
          </div>
          <ThemeSelector />
        </div>
      </header>

      {/* Content */}
      <main className="mx-auto max-w-6xl px-6 py-12 xl:grid xl:grid-cols-[260px_1fr] xl:gap-10">
        <SidebarTOC sections={tocSections} activeSection={activeSection} />

        <div className="max-w-4xl">
          {/* Intro */}
          <div className="mb-12">
          <h1 className="mb-2 text-3xl font-bold text-foreground">
            Design System Components
          </h1>
          <p className="text-base text-muted-foreground">
            All UI components follow the same design language. Use these for consistent development across the website.
          </p>
          </div>

        {/* Typography */}
        <Section id="typography" title="Typography">
          <ComponentCard
            id="headings"
            title="Headings"
            description="Font: IBM Plex Sans"
          >
            <div className="flex flex-col gap-4">
              <h1 className="text-3xl font-bold">Heading 1</h1>
              <h2 className="text-xl font-semibold">Heading 2</h2>
              <h3 className="text-base font-semibold">Heading 3</h3>
            </div>
          </ComponentCard>
        </Section>

        {/* Color Palette (removed pending shadcn-compliant swatches) */}

        {/* Theme */}
        <Section id="theme" title="Theme">
          <ComponentCard
            id="dark-mode"
            title="Dark Mode"
            description="Toggle between light and dark themes. Uses CSS class on document element."
          >
            <DarkModeToggle />
          </ComponentCard>
        </Section>

        {/* Buttons */}
        <Section id="buttons" title="Buttons">
          <ComponentCard
            id="button-variants"
            title="Button Variants"
            description="All shadcn Button variants with different styles"
            location="components/ui/button.tsx"
          >
            <div className="flex flex-wrap gap-2">
              <Button>Default</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="destructive">Destructive</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="link">Link</Button>
            </div>
          </ComponentCard>

          <ComponentCard
            id="button-sizes"
            title="Button Sizes"
            description="Button sizes: sm, default, lg, icon"
            location="components/ui/button.tsx"
          >
            <div className="flex flex-wrap items-center gap-2">
              <Button size="sm">Small</Button>
              <Button size="default">Default</Button>
              <Button size="lg">Large</Button>
              <Button size="icon">
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </ComponentCard>

          <ComponentCard
            id="primary-buttons"
            title="Primary Buttons"
            description="Main action buttons with brand color. Using shadcn Button with default variant."
            location="components/ui/button.tsx"
          >
            <Button size="sm">Small</Button>
            <Button size="default">Medium</Button>
            <Button size="lg">Large</Button>
            <Button>
              <Plus size={16} /> With Icon
            </Button>
          </ComponentCard>

          <ComponentCard
            id="secondary-buttons"
            title="Secondary Buttons"
            description="Outlined buttons for secondary actions. Using shadcn Button with outline variant."
            location="components/ui/button.tsx"
          >
            <Button variant="outline" size="sm">Small</Button>
            <Button variant="outline" size="default">Medium</Button>
            <Button variant="outline" size="lg">Large</Button>
            <Button variant="outline">
              <ArrowUpRight size={16} /> With Icon
            </Button>
          </ComponentCard>

          <ComponentCard
            id="ghost-buttons"
            title="Ghost Buttons"
            description="Minimal buttons for tertiary actions. Using shadcn Button with ghost variant."
            location="components/ui/button.tsx"
          >
            <Button variant="ghost" size="sm">Small</Button>
            <Button variant="ghost" size="default">Medium</Button>
            <Button variant="ghost" size="lg">Large</Button>
          </ComponentCard>

          <ComponentCard
            id="icon-buttons"
            title="Icon Buttons"
            description="Icon-only buttons using shadcn Button with icon variant. For custom ButtonIcon and ButtonCircle, keep your custom components."
            location="components/ui/button.tsx"
          >
            <Button size="icon">
              <Plus className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon">
              <Pencil className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <X className="h-4 w-4" />
            </Button>
            <div className="h-6 w-px bg-border" />
            <Button size="icon" className="rounded-full">
              <Sliders className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" className="rounded-full">
              <HelpCircle className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" className="rounded-full">
              <Smile className="h-4 w-4" />
            </Button>
          </ComponentCard>
        </Section>

        {/* Inputs */}
        <Section id="inputs" title="Inputs">
          <ComponentCard
            id="text-input"
            title="Text Input"
            description="Standard text input field. Using shadcn Input component."
            location="components/ui/input.tsx"
          >
            <div className="w-full max-w-sm">
              <Input placeholder="Enter student name..." />
            </div>
          </ComponentCard>

          <ComponentCard
            id="search-input"
            title="Search Input"
            description="Input with search icon. Using shadcn Input with custom icon wrapper."
            location="components/ui/input.tsx"
          >
            <div className="w-full max-w-sm">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input placeholder="Search courses or materials..." className="pl-9" />
              </div>
            </div>
          </ComponentCard>

          <ComponentCard
            id="select-dropdown"
            title="Select Dropdown"
            description="Dropdown select component. Using shadcn Select."
            location="components/ui/select.tsx"
          >
            <div className="w-full max-w-sm">
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select your course" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="math">Mathematics</SelectItem>
                  <SelectItem value="cs">Computer Science</SelectItem>
                  <SelectItem value="science">Physical Sciences</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </ComponentCard>

          <ComponentCard
            id="input-group"
            title="Input Group"
            description="Composable input groups with addons, buttons, and inline content."
            location="components/ui/input-group.tsx"
          >
            <div className="grid w-full max-w-sm gap-6">
              <InputGroup>
                <InputGroupInput placeholder="Search..." />
                <InputGroupAddon>
                  <Search className="text-muted-foreground" />
                </InputGroupAddon>
                <InputGroupAddon align="inline-end">
                  <InputGroupText>12 results</InputGroupText>
                </InputGroupAddon>
              </InputGroup>

              <TooltipProvider>
                <InputGroup>
                  <InputGroupInput placeholder="example.com" className="!pl-1" />
                  <InputGroupAddon>
                    <InputGroupText>https://</InputGroupText>
                  </InputGroupAddon>
                  <InputGroupAddon align="inline-end">
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <InputGroupButton className="rounded-full" size="icon-xs" variant="ghost">
                          <Info className="h-4 w-4" />
                        </InputGroupButton>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Enter your website URL without the protocol</p>
                      </TooltipContent>
                    </Tooltip>
                  </InputGroupAddon>
                </InputGroup>
              </TooltipProvider>

              <InputGroup>
                <InputGroupTextarea placeholder="Ask, Search or Chat..." />
                <InputGroupAddon align="block-end">
                  <InputGroupButton
                    variant="outline"
                    className="rounded-full"
                    size="icon-xs"
                  >
                    <Plus className="h-3.5 w-3.5" />
                  </InputGroupButton>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <InputGroupButton variant="ghost">Auto</InputGroupButton>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent side="top" align="start">
                      <DropdownMenuItem>Auto</DropdownMenuItem>
                      <DropdownMenuItem>Agent</DropdownMenuItem>
                      <DropdownMenuItem>Manual</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                  <InputGroupText className="ml-auto">52% used</InputGroupText>
                  <Separator orientation="vertical" className="!h-4" />
                  <InputGroupButton
                    variant="default"
                    className="rounded-full"
                    size="icon-xs"
                    disabled
                  >
                    <ArrowUp className="h-3.5 w-3.5" />
                    <span className="sr-only">Send</span>
                  </InputGroupButton>
                </InputGroupAddon>
              </InputGroup>

              <InputGroup>
                <InputGroupInput placeholder="@username" defaultValue="@aladdinhajji" />
                <InputGroupAddon align="inline-end">
                  <div className="bg-green-600 text-white flex size-4 items-center justify-center rounded-full">
                    <Check className="h-3 w-3" />
                  </div>
                </InputGroupAddon>
              </InputGroup>
            </div>
          </ComponentCard>

          <ComponentCard
            id="input-with-button"
            title="Input with Button"
            description="Simple input field with adjacent button."
            location="components/ui/input.tsx"
          >
            <div className="flex w-full max-w-sm items-center gap-2">
              <Input type="email" placeholder="Student Email" />
              <Button type="submit" variant="outline">Register</Button>
            </div>
          </ComponentCard>

          <ComponentCard
            id="input-with-label"
            title="Input with Label"
            description="Input field with accompanying label"
            location="components/ui/input.tsx"
          >
            <div className="grid w-full max-w-sm items-center gap-3">
              <Label htmlFor="email">Student Email</Label>
              <Input type="email" id="email" placeholder="alaeeddinhajji@gmail.com" />
            </div>
          </ComponentCard>

          <ComponentCard
            id="textarea"
            title="Textarea"
            description="Multi-line text input. Location: components/ui/textarea.tsx"
          >
            <div className="w-full max-w-sm space-y-2">
              <Label htmlFor="message">Study Notes</Label>
              <Textarea id="message" placeholder="Enter your study notes or questions here..." />
            </div>
          </ComponentCard>

          <ComponentCard
            id="checkbox"
            title="Checkbox"
            description="Checkable input control. Location: components/ui/checkbox.tsx"
          >
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <Checkbox id="terms" />
                <Label htmlFor="terms">Accept terms and conditions</Label>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox id="newsletter" defaultChecked />
                <Label htmlFor="newsletter">Subscribe to newsletter</Label>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox id="disabled" disabled />
                <Label htmlFor="disabled">Disabled checkbox</Label>
              </div>
            </div>
          </ComponentCard>

          <ComponentCard
            id="radio-group"
            title="Radio Group"
            description="Radio button selection group. Location: components/ui/radio-group.tsx"
          >
            <RadioGroup defaultValue="comfortable">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="default" id="r1" />
                <Label htmlFor="r1">Default</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="comfortable" id="r2" />
                <Label htmlFor="r2">Comfortable</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="compact" id="r3" />
                <Label htmlFor="r3">Compact</Label>
              </div>
            </RadioGroup>
          </ComponentCard>

          <ComponentCard
            id="slider"
            title="Slider"
            description="Range input slider. Location: components/ui/slider.tsx"
          >
            <div className="space-y-4 w-full max-w-sm">
              <div>
                <Label>Single Value</Label>
                <Slider defaultValue={[50]} max={100} step={1} className="mt-2" />
              </div>
              <div>
                <Label>Range</Label>
                <Slider defaultValue={[25, 75]} max={100} step={1} className="mt-2" />
              </div>
            </div>
          </ComponentCard>

          <ComponentCard
            id="calendar"
            title="Calendar"
            description="Date picker calendar. Location: components/ui/calendar.tsx"
          >
            <Calendar
              mode="single"
              className="rounded-md border"
            />
          </ComponentCard>

          <ComponentCard
            id="kbd"
            title="Keyboard Shortcut"
            description="Display keyboard shortcuts. Location: components/ui/kbd.tsx"
          >
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <span className="text-sm">Copy:</span>
                <Kbd>Ctrl</Kbd>
                <span>+</span>
                <Kbd>C</Kbd>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm">Paste:</span>
                <Kbd>Ctrl</Kbd>
                <span>+</span>
                <Kbd>V</Kbd>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm">Search:</span>
                <Kbd>Ctrl</Kbd>
                <span>+</span>
                <Kbd>K</Kbd>
              </div>
            </div>
          </ComponentCard>

          <ComponentCard
            id="combobox"
            title="Combobox"
            description="Searchable select dropdown. Location: components/ui/command.tsx + popover"
          >
            <ComboboxDemo />
          </ComponentCard>

          <ComponentCard
            id="date-picker"
            title="Date Picker"
            description="Calendar date picker with popover. Location: components/ui/calendar.tsx + popover"
          >
            <DatePickerDemo />
          </ComponentCard>
        </Section>

        {/* Tabs Section */}
        <Section id="tabs" title="Tabs">
          <ComponentCard
            id="tabs-example"
            title="Tabs"
            description="Tabbed content navigation. Location: components/ui/tabs.tsx"
          >
            <Tabs defaultValue="account" className="w-full max-w-md">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="account">Account</TabsTrigger>
                <TabsTrigger value="password">Password</TabsTrigger>
              </TabsList>
              <TabsContent value="account" className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" defaultValue="Pedro Duarte" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="username">Username</Label>
                  <Input id="username" defaultValue="@peduarte" />
                </div>
                <Button>Save changes</Button>
              </TabsContent>
              <TabsContent value="password" className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="current">Current password</Label>
                  <Input id="current" type="password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="new">New password</Label>
                  <Input id="new" type="password" />
                </div>
                <Button>Change password</Button>
              </TabsContent>
            </Tabs>
          </ComponentCard>
        </Section>

        {/* Composite Components */}
        <Section id="composite-components" title="Composite Components">
          {/* Search Card (removed: custom composite component) */}

          <ComponentCard
            id="accordion"
            title="Accordion"
            description="Collapsible content sections for FAQs and expandable content. Location: components/ui/accordion.tsx"
          >
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Is it accessible?</AccordionTrigger>
                <AccordionContent>
                  Yes. It adheres to the WAI-ARIA design pattern for accordions.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Is it customizable?</AccordionTrigger>
                <AccordionContent>
                  Yes. You can customize colors, borders, and animations to match your design system.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Can I open multiple items?</AccordionTrigger>
                <AccordionContent>
                  Yes. Set type=&quot;multiple&quot; to allow multiple items to be open simultaneously.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </ComponentCard>
        </Section>

        {/* Feedback */}
        <Section id="feedback" title="Feedback">
          <ComponentCard
            id="alerts"
            title="Alerts"
            description="Clean, modern notification boxes for status messages. Using shadcn Alert component."
            location="components/ui/alert.tsx"
          >
            <div className="flex flex-col gap-3 w-full">
              <Alert>
                <CheckCircle className="h-4 w-4" />
                <AlertTitle>Success</AlertTitle>
                <AlertDescription>
                  Your changes have been saved successfully.
                </AlertDescription>
              </Alert>
              <Alert variant="destructive">
                <XCircle className="h-4 w-4" />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>
                  Something went wrong. Please try again.
                </AlertDescription>
              </Alert>
              <Alert>
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Warning</AlertTitle>
                <AlertDescription>
                  Your session will expire in 5 minutes.
                </AlertDescription>
              </Alert>
              <Alert>
                <Info className="h-4 w-4" />
                <AlertTitle>Info</AlertTitle>
                <AlertDescription>
                  New features are available. Check them out!
                </AlertDescription>
              </Alert>
              <Alert>
                <AlertDescription>
                  This is a default informational message.
                </AlertDescription>
              </Alert>
            </div>
          </ComponentCard>

          <ComponentCard
            id="alert-dialog"
            title="Alert Dialog"
            description="Modal dialog for confirmations and critical actions. Using shadcn AlertDialog."
            location="components/ui/alert-dialog.tsx"
          >
            <div className="flex gap-3">
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button variant="outline"><Trash2 size={16} /> Delete</Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Delete Item?</AlertDialogTitle>
                    <AlertDialogDescription>
                      This action cannot be undone. Are you sure you want to delete this item?
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction className="bg-destructive text-destructive-foreground hover:bg-destructive/90">Delete</AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button>Confirm Action</Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Confirm Action</AlertDialogTitle>
                    <AlertDialogDescription>
                      Are you sure you want to proceed with this action?
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction>Confirm</AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          </ComponentCard>

          <ComponentCard
            id="spinner"
            title="Spinner"
            description="Shadcn style spinner using Loader2 icon"
          >
            <div className="flex items-center gap-6">
              <Loader2 className="h-4 w-4 animate-spin text-muted-foreground" />
              <div className="flex items-center gap-2">
                <Loader2 className="h-5 w-5 animate-spin text-primary" />
                <span className="text-sm text-muted-foreground">Loading...</span>
              </div>
              <Loader2 className="h-6 w-6 animate-spin text-foreground" />
            </div>
          </ComponentCard>

          <ComponentCard
            id="progress"
            title="Progress"
            description="Linear progress indicators. Using shadcn Progress component. For CircularProgress, keep custom component."
            location="components/ui/progress.tsx"
          >
            <div className="flex flex-col gap-6 w-full">
              <div className="flex flex-col gap-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Progress</span>
                    <span className="font-medium">25%</span>
                  </div>
                  <Progress value={25} />
                </div>
                <Progress value={60} className="h-3" />
                <Progress value={85} className="h-4" />
                <Progress value={undefined} className="h-2" />
              </div>
              <div className="flex gap-6">
                {/* Circular progress (removed: custom component) */}
              </div>
            </div>
          </ComponentCard>

          <ComponentCard
            id="dialog"
            title="Dialog"
            description="Modal dialog for forms and important actions. Using shadcn Dialog with Button components."
            location="components/ui/dialog.tsx"
          >
            <div className="flex gap-3">
              <Dialog>
                <DialogTrigger asChild>
                  <Button>Edit Profile</Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Edit Student Profile</DialogTitle>
                    <DialogDescription>
                      Update your student information. Click save when you&apos;re done.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid gap-2">
                      <Label htmlFor="name">Student Name</Label>
                      <Input id="name" placeholder="Aladdin Hajji" className="rounded-lg" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="email">Student Email</Label>
                      <Input id="email" placeholder="alaeeddinhajji@gmail.com" className="rounded-lg" />
                    </div>
                  </div>
                  <DialogFooter className="gap-2">
                    <Button variant="outline">Cancel</Button>
                    <Button>Save changes</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>

              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline">Confirm Action</Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Confirm Action</DialogTitle>
                    <DialogDescription>
                      Are you sure you want to proceed? This action may have consequences.
                    </DialogDescription>
                  </DialogHeader>
                  <DialogFooter className="gap-2 mt-4">
                    <Button variant="outline">No, cancel</Button>
                    <Button>Yes, proceed</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          </ComponentCard>

          <ComponentCard
            id="skeleton"
            title="Skeleton"
            description="Loading placeholder for content. Location: components/ui/skeleton.tsx"
          >
            <div className="flex flex-col gap-6 w-full">
              {/* User profile skeleton */}
              <div className="flex items-center gap-4">
                <Skeleton className="h-12 w-12 rounded-full" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-[200px]" />
                  <Skeleton className="h-4 w-[150px]" />
                </div>
              </div>
              {/* Card skeleton */}
              <div className="space-y-3">
                <Skeleton className="h-[125px] w-full rounded-xl" />
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-4 w-1/2" />
              </div>
            </div>
          </ComponentCard>

          <ComponentCard
            id="sonner"
            title="Toast Notifications (Sonner)"
            description="Beautiful toast notifications. Location: components/ui/sonner.tsx"
          >
            <div className="flex flex-wrap gap-2">
              <Button
                variant="outline"
                onClick={() =>
                  toast("Event has been created", {
                    description: "Sunday, December 03, 2023 at 9:00 AM",
                  })
                }
              >
                Show Toast
              </Button>
              <Button
                variant="outline"
                onClick={() =>
                  toast.success("Success!", {
                    description: "Your changes have been saved.",
                  })
                }
              >
                Success
              </Button>
              <Button
                variant="outline"
                onClick={() =>
                  toast.error("Error!", {
                    description: "Something went wrong.",
                  })
                }
              >
                Error
              </Button>
              <Button
                variant="outline"
                onClick={() =>
                  toast("Are you sure?", {
                    description: "This action cannot be undone.",
                    action: {
                      label: "Confirm",
                      onClick: () => toast.success("Confirmed!"),
                    },
                  })
                }
              >
                With Action
              </Button>
            </div>
          </ComponentCard>

          {/* Empty State (removed: custom component) */}
        </Section>

        {/* Controls */}
        <Section id="controls" title="Controls">
          <ComponentCard
            id="switch-toggle"
            title="Switch Toggle"
            description="Using shadcn Switch"
            location="components/ui/switch.tsx"
          >
            <div className="flex flex-col gap-4">
              <label className="flex items-center gap-3">
                <Switch />
                <span className="text-sm">Dark Mode</span>
              </label>
              <label className="flex items-center gap-3">
                <Switch defaultChecked />
                <span className="text-sm">Notifications</span>
              </label>
              <label className="flex items-center gap-3 opacity-50">
                <Switch disabled />
                <span className="text-sm">Disabled Option</span>
              </label>
            </div>
          </ComponentCard>

          <ComponentCard
            id="toggle-group"
            title="Toggle Group"
            description="Mutually exclusive button group. Location: components/controls/toggle-group.tsx"
          >
            <ToggleGroupDemo />
          </ComponentCard>

          <ComponentCard
            id="pagination"
            title="Pagination"
            description="Shadcn Pagination component"
            location="components/ui/pagination.tsx"
          >
            <div className="w-full">
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious href="#" />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">1</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#" isActive>
                      2
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">3</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationNext href="#" />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          </ComponentCard>

          <ComponentCard
            id="divider"
            title="Divider"
            description="Visual separator for content sections. Location: components/controls/divider.tsx"
          >
            <div className="flex gap-4 w-full">
              {/* Card 1: Vertical divider between text */}
              <div className="flex-1 rounded-lg border border-border p-4">
                <p className="text-xs font-medium text-muted-foreground mb-3">Vertical Separator</p>
                <div className="flex items-center justify-center gap-3 h-8">
                  <span className="text-sm">Item 1</span>
                  <Separator orientation="vertical" />
                  <span className="text-sm">Item 2</span>
                  <Separator orientation="vertical" />
                  <span className="text-sm">Item 3</span>
                </div>
              </div>
              
              {/* Card 2: Horizontal divider */}
              <div className="flex-1 rounded-lg border border-border p-4">
                <p className="text-xs font-medium text-muted-foreground mb-3">Horizontal Separator</p>
                <div className="space-y-2">
                  <p className="text-sm">Section 1</p>
                  <Separator />
                  <p className="text-sm">Section 2</p>
                </div>
              </div>
              
              {/* Card 3: Divider with label */}
              <div className="flex-1 rounded-lg border border-border p-4">
                <p className="text-xs font-medium text-muted-foreground mb-3">With Label</p>
                <div className="flex items-center justify-center h-8 gap-2">
                  <Separator className="flex-1" />
                  <span className="text-xs text-muted-foreground">OR</span>
                  <Separator className="flex-1" />
                </div>
              </div>
            </div>
          </ComponentCard>
        </Section>

        {/* Badges (shadcn) */}
        <Section id="badges" title="Badges">
          <ComponentCard
            id="badge-variants"
            title="Badge Variants"
            description="All shadcn Badge variants"
            location="components/ui/badge.tsx"
          >
            <div className="flex flex-wrap gap-2">
              <Badge>Default</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="destructive">Destructive</Badge>
              <Badge variant="outline">Outline</Badge>
            </div>
          </ComponentCard>

          <ComponentCard
            id="badge-with-icons"
            title="Badges with Icons"
            description="Badges can include icons for better context"
            location="components/ui/badge.tsx"
          >
            <div className="flex flex-wrap gap-2">
              <Badge>
                <Check className="mr-1 h-3 w-3" />
                Success
              </Badge>
              <Badge variant="secondary">
                <Info className="mr-1 h-3 w-3" />
                Info
              </Badge>
              <Badge variant="destructive">
                <X className="mr-1 h-3 w-3" />
                Error
              </Badge>
            </div>
          </ComponentCard>
        </Section>

        {/* Cards (shadcn) */}
        <Section id="cards" title="Cards">
          <ComponentCard
            id="card-examples"
            title="Card Examples"
            description="All shadcn Card component patterns"
            location="components/ui/card.tsx"
          >
            <div className="grid gap-4 md:grid-cols-2">
              <ShadcnCard>
                <CardHeader>
                  <CardTitle>Advanced Mathematics Course</CardTitle>
                  <CardDescription>Enroll in our comprehensive math program</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">Master calculus, linear algebra, and advanced problem-solving techniques.</p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Enroll Now</Button>
                </CardFooter>
              </ShadcnCard>

              <ShadcnCard>
                <CardHeader>
                  <CardTitle>Study Progress</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Track your learning journey and achievements across all courses.</p>
                </CardContent>
              </ShadcnCard>
            </div>
          </ComponentCard>
        </Section>

        {/* Avatar (shadcn) */}
        <Section id="avatars" title="Avatars">
          <ComponentCard
            id="avatar-examples"
            title="Avatar Examples"
            description="shadcn Avatar with images and fallbacks"
            location="components/ui/avatar.tsx"
          >
            <div className="flex flex-wrap items-center gap-4">
              <ShadcnAvatar>
                <AvatarImage src="https://ryples.com/wp-content/uploads/2022/11/ryples-blue-png-50x50.png" alt="Aladdin Hajji" />
                <AvatarFallback>AH</AvatarFallback>
              </ShadcnAvatar>
              <ShadcnAvatar>
                <AvatarFallback>MH</AvatarFallback>
              </ShadcnAvatar>
              <ShadcnAvatar className="h-12 w-12">
                <AvatarFallback>AH</AvatarFallback>
              </ShadcnAvatar>
              <ShadcnAvatar className="h-16 w-16">
                <AvatarImage src="https://ryples.com/wp-content/uploads/2022/11/ryples-blue-png-50x50.png" alt="Mohamed" />
                <AvatarFallback className="text-lg">MH</AvatarFallback>
              </ShadcnAvatar>
            </div>
          </ComponentCard>
        </Section>

        {/* Aspect Ratio */}
        <Section id="aspect-ratio" title="Aspect Ratio">
          <ComponentCard
            id="aspect-ratio-examples"
            title="Aspect Ratio Examples"
            description="Maintain aspect ratios for images and videos"
            location="components/ui/aspect-ratio.tsx"
          >
            <div className="grid gap-4 md:grid-cols-3">
              <div>
                <p className="text-xs text-muted-foreground mb-2">16/9</p>
                <AspectRatio ratio={16 / 9} className="bg-muted rounded-lg overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
                    alt="Photo by Drew Beamer"
                    className="h-full w-full object-cover"
                  />
                </AspectRatio>
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-2">4/3</p>
                <AspectRatio ratio={4 / 3} className="bg-muted rounded-lg overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1535025183041-0991a977e25b?w=800&dpr=2&q=80"
                    alt="Photo"
                    className="h-full w-full object-cover"
                  />
                </AspectRatio>
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-2">1/1</p>
                <AspectRatio ratio={1} className="bg-muted rounded-lg overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1682686581654-5edee4bc6bc0?w=800&dpr=2&q=80"
                    alt="Photo"
                    className="h-full w-full object-cover"
                  />
                </AspectRatio>
              </div>
            </div>
          </ComponentCard>
        </Section>

        {/* Collapsible */}
        <Section id="collapsible" title="Collapsible">
          <ComponentCard
            id="collapsible-example"
            title="Collapsible Example"
            description="Expandable content sections"
            location="components/ui/collapsible.tsx"
          >
            <Collapsible className="w-full max-w-md space-y-2">
              <div className="flex items-center justify-between space-x-4">
                <h4 className="text-sm font-semibold">
                  @peduarte starred 3 repositories
                </h4>
                <CollapsibleTrigger asChild>
                  <Button variant="ghost" size="sm">
                    <ChevronsUpDown className="h-4 w-4" />
                    <span className="sr-only">Toggle</span>
                  </Button>
                </CollapsibleTrigger>
              </div>
              <div className="rounded-md border px-4 py-2 text-sm">
                @radix-ui/primitives
              </div>
              <CollapsibleContent className="space-y-2">
                <div className="rounded-md border px-4 py-2 text-sm">
                  @radix-ui/colors
                </div>
                <div className="rounded-md border px-4 py-2 text-sm">
                  @stitches/react
                </div>
              </CollapsibleContent>
            </Collapsible>
          </ComponentCard>
        </Section>

        {/* Carousel */}
        <Section id="carousel" title="Carousel">
          <ComponentCard
            id="carousel-example"
            title="Carousel Example"
            description="Image and content carousels"
            location="components/ui/carousel.tsx"
          >
            <Carousel className="w-full max-w-xs mx-auto">
              <CarouselContent>
                {Array.from({ length: 5 }).map((_, index) => (
                  <CarouselItem key={index}>
                    <div className="p-1">
                      <ShadcnCard>
                        <CardContent className="flex aspect-square items-center justify-center p-6">
                          <span className="text-4xl font-semibold">{index + 1}</span>
                        </CardContent>
                      </ShadcnCard>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </ComponentCard>
        </Section>

        {/* Menubar */}
        <Section id="menubar" title="Menubar">
          <ComponentCard
            id="menubar-example"
            title="Menubar Example"
            description="Application menu bar navigation"
            location="components/ui/menubar.tsx"
          >
            <Menubar>
              <MenubarMenu>
                <MenubarTrigger>File</MenubarTrigger>
                <MenubarContent>
                  <MenubarItem>
                    New Tab <MenubarShortcut>⌘T</MenubarShortcut>
                  </MenubarItem>
                  <MenubarItem>New Window</MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>Share</MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>Print</MenubarItem>
                </MenubarContent>
              </MenubarMenu>
              <MenubarMenu>
                <MenubarTrigger>Edit</MenubarTrigger>
                <MenubarContent>
                  <MenubarItem>
                    Undo <MenubarShortcut>⌘Z</MenubarShortcut>
                  </MenubarItem>
                  <MenubarItem>
                    Redo <MenubarShortcut>⇧⌘Z</MenubarShortcut>
                  </MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>Cut</MenubarItem>
                  <MenubarItem>Copy</MenubarItem>
                  <MenubarItem>Paste</MenubarItem>
                </MenubarContent>
              </MenubarMenu>
              <MenubarMenu>
                <MenubarTrigger>View</MenubarTrigger>
                <MenubarContent>
                  <MenubarItem>Zoom In</MenubarItem>
                  <MenubarItem>Zoom Out</MenubarItem>
                  <MenubarItem>Reset Zoom</MenubarItem>
                </MenubarContent>
              </MenubarMenu>
            </Menubar>
          </ComponentCard>
        </Section>

        {/* Navigation Menu */}
        <Section id="navigation-menu" title="Navigation Menu">
          <ComponentCard
            id="navigation-menu-example"
            title="Navigation Menu Example"
            description="Complex navigation with dropdowns"
            location="components/ui/navigation-menu.tsx"
          >
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <Link
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                            href="/"
                          >
                            <Layers className="h-6 w-6" />
                            <div className="mb-2 mt-4 text-lg font-medium">
                              shadcn/ui
                            </div>
                            <p className="text-sm leading-tight text-muted-foreground">
                              Beautifully designed components built with Radix UI and Tailwind CSS.
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <a href="/docs" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                            <div className="text-sm font-medium leading-none">Introduction</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Re-usable components built using Radix UI and Tailwind CSS.
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Components</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      <li>
                        <NavigationMenuLink asChild>
                          <a href="#" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground">
                            <div className="text-sm font-medium leading-none">Alert Dialog</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              A modal dialog that interrupts the user.
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink href="/docs" className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                    Documentation
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </ComponentCard>
        </Section>

        {/* Scroll Area */}
        <Section id="scroll-area" title="Scroll Area">
          <ComponentCard
            id="scroll-area-example"
            title="Scroll Area Example"
            description="Styled scrollable container"
            location="components/ui/scroll-area.tsx"
          >
            <ScrollArea className="h-72 w-full max-w-md rounded-md border">
              <div className="p-4">
                <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
                {Array.from({ length: 50 }).map((_, i) => (
                  <div key={i} className="text-sm">
                    Tag {i + 1}
                    {i < 49 && <div className="my-2 h-px bg-border" />}
                  </div>
                ))}
              </div>
            </ScrollArea>
          </ComponentCard>
        </Section>

        {/* Progress */}
        <Section id="progress" title="Progress">
          <ComponentCard
            id="progress-example"
            title="Progress Bar"
            description="Progress indicator for loading states"
            location="components/ui/progress.tsx"
          >
            <div className="space-y-4 w-full max-w-md">
              <div>
                <p className="text-xs text-muted-foreground mb-2">25% Complete</p>
                <Progress value={25} />
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-2">50% Complete</p>
                <Progress value={50} />
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-2">75% Complete</p>
                <Progress value={75} />
              </div>
            </div>
          </ComponentCard>
        </Section>

        {/* Skeleton */}
        <Section id="skeleton" title="Skeleton">
          <ComponentCard
            id="skeleton-example"
            title="Skeleton Loaders"
            description="Loading placeholders for content"
            location="components/ui/skeleton.tsx"
          >
            <div className="flex items-center space-x-4">
              <Skeleton className="h-12 w-12 rounded-full" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-[250px]" />
                <Skeleton className="h-4 w-[200px]" />
              </div>
            </div>
          </ComponentCard>
        </Section>

        {/* Slider */}
        <Section id="slider" title="Slider">
          <ComponentCard
            id="slider-example"
            title="Slider Examples"
            description="Range input controls"
            location="components/ui/slider.tsx"
          >
            <div className="space-y-6 w-full max-w-md">
              <div>
                <p className="text-xs text-muted-foreground mb-2">Default</p>
                <Slider defaultValue={[50]} max={100} step={1} />
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-2">Range</p>
                <Slider defaultValue={[25, 75]} max={100} step={1} />
              </div>
            </div>
          </ComponentCard>
        </Section>

        {/* Switch */}
        <Section id="switch" title="Switch">
          <ComponentCard
            id="switch-example"
            title="Switch Toggle"
            description="Toggle switch for boolean settings"
            location="components/ui/switch.tsx"
          >
            <div className="flex flex-col gap-4">
              <div className="flex items-center space-x-2">
                <Switch id="airplane-mode" />
                <Label htmlFor="airplane-mode">Airplane Mode</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Switch id="notifications" defaultChecked />
                <Label htmlFor="notifications">Enable Notifications</Label>
              </div>
            </div>
          </ComponentCard>
        </Section>

        {/* Table */}
        <Section id="table" title="Table">
          <ComponentCard
            id="table-example"
            title="Table Example"
            description="Data table with styled rows and columns"
            location="components/ui/table.tsx"
          >
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">Invoice</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Method</TableHead>
                  <TableHead className="text-right">Amount</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">INV001</TableCell>
                  <TableCell>Paid</TableCell>
                  <TableCell>Credit Card</TableCell>
                  <TableCell className="text-right">$250.00</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">INV002</TableCell>
                  <TableCell>Pending</TableCell>
                  <TableCell>PayPal</TableCell>
                  <TableCell className="text-right">$150.00</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">INV003</TableCell>
                  <TableCell>Unpaid</TableCell>
                  <TableCell>Bank Transfer</TableCell>
                  <TableCell className="text-right">$350.00</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </ComponentCard>
        </Section>

        {/* Toggle and Toggle Group */}
        <Section id="toggle" title="Toggle">
          <ComponentCard
            id="toggle-example"
            title="Toggle Examples"
            description="Toggle buttons for state changes"
            location="components/ui/toggle.tsx"
          >
            <div className="flex gap-2">
              <Toggle>
                <Bold className="h-4 w-4" />
              </Toggle>
              <Toggle>
                <Italic className="h-4 w-4" />
              </Toggle>
              <Toggle>
                <Underline className="h-4 w-4" />
              </Toggle>
            </div>
          </ComponentCard>

          <ComponentCard
            id="toggle-group-example"
            title="Toggle Group"
            description="Grouped toggle options"
            location="components/ui/toggle-group.tsx"
          >
            <ToggleGroup type="single">
              <ToggleGroupItem value="bold">
                <Bold className="h-4 w-4" />
              </ToggleGroupItem>
              <ToggleGroupItem value="italic">
                <Italic className="h-4 w-4" />
              </ToggleGroupItem>
              <ToggleGroupItem value="underline">
                <Underline className="h-4 w-4" />
              </ToggleGroupItem>
            </ToggleGroup>
          </ComponentCard>
        </Section>

        {/* Tooltip */}
        <Section id="tooltip" title="Tooltip">
          <ComponentCard
            id="tooltip-example"
            title="Tooltip Examples"
            description="Contextual help text on hover"
            location="components/ui/tooltip.tsx"
          >
            <div className="flex gap-2">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline">Hover me</Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>This is a tooltip</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </ComponentCard>
        </Section>

        {/* Dialog */}
        <Section id="dialog" title="Dialog">
          <ComponentCard
            id="dialog-example"
            title="Dialog Example"
            description="Modal dialog for important information"
            location="components/ui/dialog.tsx"
          >
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline">Open Dialog</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Are you absolutely sure?</DialogTitle>
                  <DialogDescription>
                    This action cannot be undone. This will permanently delete your account
                    and remove your data from our servers.
                  </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                  <Button variant="outline">Cancel</Button>
                  <Button>Confirm</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </ComponentCard>
        </Section>

        {/* Alert Dialog */}
        <Section id="alert-dialog" title="Alert Dialog">
          <ComponentCard
            id="alert-dialog-example"
            title="Alert Dialog Example"
            description="Blocking confirmation dialog"
            location="components/ui/alert-dialog.tsx"
          >
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="destructive">Delete Account</Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This action cannot be undone. This will permanently delete your
                    account and remove your data from our servers.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction>Continue</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </ComponentCard>
        </Section>

        {/* Sheet */}
        <Section id="sheet" title="Sheet">
          <ComponentCard
            id="sheet-example"
            title="Sheet Example"
            description="Slide-out drawer panel"
            location="components/ui/sheet.tsx"
          >
            <div className="flex gap-2">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline">Open Right</Button>
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>Edit profile</SheetTitle>
                    <SheetDescription>
                      Make changes to your profile here. Click save when you&#39;re done.
                    </SheetDescription>
                  </SheetHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid gap-2">
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" defaultValue="Pedro Duarte" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="username">Username</Label>
                      <Input id="username" defaultValue="@peduarte" />
                    </div>
                  </div>
                  <SheetFooter>
                    <Button type="submit">Save changes</Button>
                  </SheetFooter>
                </SheetContent>
              </Sheet>
            </div>
          </ComponentCard>
        </Section>

        {/* Drawer */}
        <Section id="drawer" title="Drawer">
          <ComponentCard
            id="drawer-example"
            title="Drawer Example"
            description="Mobile-friendly bottom drawer. Location: components/ui/drawer.tsx"
          >
            <Drawer>
              <DrawerTrigger asChild>
                <Button variant="outline">Open Drawer</Button>
              </DrawerTrigger>
              <DrawerContent>
                <DrawerHeader>
                  <DrawerTitle>Are you absolutely sure?</DrawerTitle>
                  <DrawerDescription>This action cannot be undone.</DrawerDescription>
                </DrawerHeader>
                <div className="p-4">
                  <p className="text-sm text-muted-foreground">
                    This drawer component is perfect for mobile interfaces and bottom sheets.
                  </p>
                </div>
                <DrawerFooter>
                  <Button>Submit</Button>
                  <DrawerClose asChild>
                    <Button variant="outline">Cancel</Button>
                  </DrawerClose>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
          </ComponentCard>
        </Section>

        {/* Resizable */}
        <Section id="resizable" title="Resizable">
          <ComponentCard
            id="resizable-example"
            title="Resizable Panels"
            description="Draggable resizable panel layouts. Location: components/ui/resizable.tsx"
          >
            <ResizablePanelGroup className="max-w-md rounded-lg border" direction={"horizontal"}>
              <ResizablePanel defaultSize={33}>
                <div className="flex h-[200px] items-center justify-center p-6">
                  <span className="font-semibold">Sidebar</span>
                </div>
              </ResizablePanel>
              <ResizableHandle />
              <ResizablePanel defaultSize={34}>
                <ResizablePanelGroup direction="vertical">
                  <ResizablePanel defaultSize={20}>
                    <div className="flex h-full items-center justify-center p-6">
                      <span className="font-semibold">Top</span>
                    </div>
                  </ResizablePanel>
                  <ResizableHandle />
                  <ResizablePanel defaultSize={50}>
                    <div className="flex h-full items-center justify-center p-6">
                      <span className="font-semibold">Bottom</span>
                    </div>
                  </ResizablePanel>
                </ResizablePanelGroup>
              </ResizablePanel>
              <ResizableHandle />
              <ResizablePanel defaultSize={33}>
                <div className="flex h-[200px] items-center justify-center p-6">
                  <span className="font-semibold">Panel 3</span>
                </div>
              </ResizablePanel>
            </ResizablePanelGroup>
          </ComponentCard>
        </Section>

        {/* Dropdown Menu */}
        <Section id="dropdown-menu" title="Dropdown Menu">
          <ComponentCard
            id="dropdown-menu-example"
            title="Dropdown Menu Example"
            description="Context menus and dropdowns"
            location="components/ui/dropdown-menu.tsx"
          >
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">Open Menu</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem>Team</DropdownMenuItem>
                <DropdownMenuItem>Logout</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </ComponentCard>
        </Section>

        {/* Context Menu */}
        <Section id="context-menu" title="Context Menu">
          <ComponentCard
            id="context-menu-example"
            title="Context Menu Example"
            description="Right-click context menu"
            location="components/ui/context-menu.tsx"
          >
            <ContextMenu>
              <ContextMenuTrigger asChild>
                <div className="flex h-32 w-64 items-center justify-center rounded-md border border-dashed text-sm">
                  Right click here
                </div>
              </ContextMenuTrigger>
              <ContextMenuContent>
                <ContextMenuItem>
                  Back <ContextMenuShortcut>⌘[</ContextMenuShortcut>
                </ContextMenuItem>
                <ContextMenuItem disabled>
                  Forward <ContextMenuShortcut>⌘]</ContextMenuShortcut>
                </ContextMenuItem>
                <ContextMenuItem>
                  Reload <ContextMenuShortcut>⌘R</ContextMenuShortcut>
                </ContextMenuItem>
                <ContextMenuSeparator />
                <ContextMenuSub>
                  <ContextMenuSubTrigger>More Tools</ContextMenuSubTrigger>
                  <ContextMenuSubContent>
                    <ContextMenuItem>Save Page As...</ContextMenuItem>
                    <ContextMenuItem>Create Shortcut...</ContextMenuItem>
                    <ContextMenuItem>Name Window...</ContextMenuItem>
                    <ContextMenuSeparator />
                    <ContextMenuItem>Developer Tools</ContextMenuItem>
                  </ContextMenuSubContent>
                </ContextMenuSub>
              </ContextMenuContent>
            </ContextMenu>
          </ComponentCard>
        </Section>

        {/* Hover Card */}
        <Section id="hover-card" title="Hover Card">
          <ComponentCard
            id="hover-card-example"
            title="Hover Card Example"
            description="Hoverable content card with details"
            location="components/ui/hover-card.tsx"
          >
            <HoverCard>
              <HoverCardTrigger asChild>
                <Button variant="link">@aladdinhajji</Button>
              </HoverCardTrigger>
              <HoverCardContent className="w-80">
                <div className="flex justify-between space-x-4">
                  <ShadcnAvatar>
                    <AvatarImage src="https://ryples.com/wp-content/uploads/2022/11/ryples-blue-png-50x50.png" />
                    <AvatarFallback>AH</AvatarFallback>
                  </ShadcnAvatar>
                  <div className="space-y-1">
                    <h4 className="text-sm font-semibold">Aladdin Hajji</h4>
                    <p className="text-sm text-muted-foreground">
                      Computer Science Student · alaeeddinhajji@gmail.com
                    </p>
                    <div className="flex items-center pt-2">
                      <CalendarIcon className="mr-2 h-4 w-4 opacity-70" />{" "}
                      <span className="text-xs text-muted-foreground">
                        Member since January 2024
                      </span>
                    </div>
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>
          </ComponentCard>
        </Section>

        {/* Popover */}
        <Section id="popover" title="Popover">
          <ComponentCard
            id="popover-example"
            title="Popover Example"
            description="Floating content popover"
            location="components/ui/popover.tsx"
          >
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline">Open Popover</Button>
              </PopoverTrigger>
              <PopoverContent className="w-80">
                <div className="grid gap-4">
                  <div className="space-y-2">
                    <h4 className="font-medium leading-none">Dimensions</h4>
                    <p className="text-sm text-muted-foreground">
                      Set the dimensions for the layer.
                    </p>
                  </div>
                  <div className="grid gap-2">
                    <div className="grid grid-cols-3 items-center gap-4">
                      <Label htmlFor="width">Width</Label>
                      <Input
                        id="width"
                        defaultValue="100%"
                        className="col-span-2 h-8"
                      />
                    </div>
                    <div className="grid grid-cols-3 items-center gap-4">
                      <Label htmlFor="height">Height</Label>
                      <Input
                        id="height"
                        defaultValue="25px"
                        className="col-span-2 h-8"
                      />
                    </div>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          </ComponentCard>
        </Section>

        {/* Command */}
        <Section id="command" title="Command">
          <ComponentCard
            id="command-example"
            title="Command Palette"
            description="Fast, composable command menu"
            location="components/ui/command.tsx"
          >
            <Command className="rounded-lg border shadow-md">
              <CommandInput placeholder="Type a command or search..." />
              <CommandList>
                <CommandEmpty>No results found.</CommandEmpty>
                <CommandGroup heading="Suggestions">
                  <CommandItem>
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    <span>Calendar</span>
                  </CommandItem>
                  <CommandItem>
                    <Smile className="mr-2 h-4 w-4" />
                    <span>Search Emoji</span>
                  </CommandItem>
                  <CommandItem>
                    <Calculator className="mr-2 h-4 w-4" />
                    <span>Calculator</span>
                  </CommandItem>
                </CommandGroup>
              </CommandList>
            </Command>
          </ComponentCard>
        </Section>

        {/* Breadcrumb */}
        <Section id="breadcrumb" title="Breadcrumb">
          <ComponentCard
            id="breadcrumb-example"
            title="Breadcrumb Navigation"
            description="Show the user's current location"
            location="components/ui/breadcrumb.tsx"
          >
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href="/docs">Docs</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Components</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </ComponentCard>
        </Section>

        {/* Overlays (removed: cleanup of malformed and custom overlay demos) */}
        </div>
      </main>
    </div>
  );
}
