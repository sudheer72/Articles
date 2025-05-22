import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  ChevronDown,
  Newspaper,
  PenTool,
  Key,
  Bot,
  Briefcase,
  FileText,
  Link2,
  ExternalLink,
  LayoutDashboard,
  LifeBuoy,
  Bell,
  MessageSquare,
  UserRound,
  ChevronLeft
} from "lucide-react";
import { useEffect, useState } from "react";

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Sidebar({ className }: SidebarProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth < 768) {
        setIsCollapsed(true);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className={cn(
        "relative border-r bg-card flex flex-col h-screen",
        isCollapsed ? "w-[80px]" : "w-[280px]",
        className
      )}
    >
      <div className="flex h-[60px] items-center border-b px-6">
        <div className="flex items-center gap-2 font-semibold">
          {!isCollapsed && (
            <span className="text-2xl font-bold">abun</span>
          )}
          {isCollapsed && <span className="text-2xl font-bold">a</span>}
        </div>
        {!isMobile && (
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-2 top-3"
            onClick={() => setIsCollapsed(!isCollapsed)}
          >
            <ChevronLeft
              className={cn(
                "h-4 w-4 transition-transform",
                isCollapsed && "rotate-180"
              )}
            />
          </Button>
        )}
      </div>
      <div className={cn("px-3 py-2", !isCollapsed && "border-b")}>
        <div className="flex items-center justify-between rounded-lg bg-card px-3 py-2">
          <div className="flex items-center gap-2 text-muted-foreground">
            <div className="h-6 w-6 rounded-full bg-rose-500 flex items-center justify-center text-white font-medium text-xs">
              {isCollapsed ? 'A' : ''}
            </div>
            {!isCollapsed && (
              <span className="text-sm font-medium">amazon.com</span>
            )}
          </div>
          {!isCollapsed && (
            <Button variant="ghost" size="icon" className="h-4 w-4">
              <ChevronDown className="h-3 w-3" />
            </Button>
          )}
        </div>
      </div>
      <ScrollArea className="flex-1">
        <div className="space-y-2 p-2">
          <NavItem 
            icon={Newspaper} 
            label="Articles" 
            isCollapsed={isCollapsed} 
            isActive
            submenu={
              isCollapsed ? [] : [
                "Create Article",
                "Generated Articles",
                "Keyword Projects",
                "AI Keyword to Article",
                "Steal Competitor Keyword",
                "Import Keyword from GSC",
                "Manual Keyword to Article",
                "Bulk Keyword to Article",
                "Longtail Keyword to Article",
                "Article Settings"
              ]
            }
          />
          <NavItem icon={PenTool} label="Auto Blog" isCollapsed={isCollapsed} />
          <NavItem icon={Link2} label="Internal Links" isCollapsed={isCollapsed} />
          <NavItem icon={ExternalLink} label="Free Backlinks" isCollapsed={isCollapsed} />
          <NavItem icon={LayoutDashboard} label="Integrations" isCollapsed={isCollapsed} />
          <NavItem icon={Key} label="Subscription" isCollapsed={isCollapsed} />
          <NavItem icon={Bot} label="Affiliate Program" isCollapsed={isCollapsed} />
          <NavItem icon={LifeBuoy} label="Help Center" isCollapsed={isCollapsed} />
          <NavItem icon={Bell} label="Updates" isCollapsed={isCollapsed} />
          <NavItem icon={MessageSquare} label="Live Chat Support" isCollapsed={isCollapsed} />
          <NavItem icon={UserRound} label="Profile" isCollapsed={isCollapsed} />
        </div>
      </ScrollArea>
    </div>
  );
}

interface NavItemProps {
  icon: React.ElementType;
  label: string;
  isCollapsed: boolean;
  isActive?: boolean;
  submenu?: string[];
}

function NavItem({ icon: Icon, label, isCollapsed, isActive, submenu }: NavItemProps) {
  const [isOpen, setIsOpen] = useState(isActive);

  return (
    <div className="space-y-1">
      <Button
        variant={isActive ? "secondary" : "ghost"}
        size={isCollapsed ? "icon" : "default"}
        className={cn(
          "w-full justify-start",
          isCollapsed && "px-2",
          isActive && "bg-secondary"
        )}
        onClick={submenu ? () => setIsOpen(!isOpen) : undefined}
      >
        <Icon className={cn("h-4 w-4", isActive && "text-primary")} />
        {!isCollapsed && (
          <span className="ml-2 flex-1 text-left">{label}</span>
        )}
        {!isCollapsed && submenu && (
          <ChevronDown
            className={cn(
              "ml-auto h-4 w-4 transition-transform",
              isOpen && "rotate-180"
            )}
          />
        )}
      </Button>
      
      {!isCollapsed && isOpen && submenu && submenu.length > 0 && (
        <div className="ml-4 pl-4 border-l">
          {submenu.map((item, index) => (
            <Button
              key={index}
              variant="ghost"
              size="sm"
              className="w-full justify-start h-9 mt-1"
            >
              <span className="ml-2 text-sm font-normal">{item}</span>
            </Button>
          ))}
        </div>
      )}
    </div>
  );
}