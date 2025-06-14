
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { SheetClose } from "@/components/ui/sheet";
import type { LucideIcon } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { ChevronDown, ArrowRight } from "lucide-react";
import { Separator } from "@/components/ui/separator";


export interface NavLink {
  href: string;
  label: string;
  disabled?: boolean;
}

export interface SubServiceItem {
  label: string;
  href: string;
}

export interface ServiceItem {
  icon: LucideIcon;
  title: string;
  description?: string;
  href: string;
  subServices?: SubServiceItem[];
}

export interface NavItem {
  label: string;
  href?: string;
  disabled?: boolean;
  children?: NavLink[];
  serviceItems?: ServiceItem[];
  isIndustriesMenu?: boolean;
}

interface NavLinksProps {
  items: NavItem[];
  isMobile?: boolean;
}

export function NavLinks({ items, isMobile = false }: NavLinksProps) {
  const pathname = usePathname();

  const navLinkClasses = (href: string | undefined, disabled?: boolean, isTrigger?: boolean, isActive?: boolean) =>
    cn(
      "text-sm mx-2 font-medium transition-colors hover:text-primary",
      isActive ? "text-primary font-semibold" : "text-muted-foreground",
      disabled && "pointer-events-none opacity-50",
      isMobile
        ? "block rounded-md px-3 py-2 text-base hover:bg-accent hover:text-accent-foreground w-full text-left"
        : "px-2 py-2 rounded-md",
      !isMobile && isTrigger && "cursor-pointer flex items-center gap-1 group"
    );

  const dropdownMenuItemLinkClasses = (href: string | undefined, disabled?: boolean) =>
    cn(
      "w-full text-left text-card-foreground hover:text-primary",
      pathname === href ? "text-primary font-semibold" : "",
      disabled && "pointer-events-none opacity-50"
    );

  return (
    <>
      {items.map((item) => {
        const isActive = item.href ? pathname.startsWith(item.href) : false;

        if (!isMobile && item.serviceItems && item.serviceItems.length > 0) {
          const isIndustries = !!item.isIndustriesMenu;

          const col1CountServices = 2;
          const firstColumnItemsServices = item.serviceItems.slice(0, col1CountServices);
          const secondColumnItemsServices = item.serviceItems.slice(col1CountServices, item.serviceItems.length);

          const col1TitleServices = "Core Pillars";
          const col2TitleServices = "Strategic Focus";


          return (
            <HoverCard key={item.label} openDelay={50} closeDelay={150}>
              <HoverCardTrigger asChild>
                <Link
                  href={item.href!}
                  className={cn(
                    navLinkClasses(item.href, item.disabled, true, isActive)
                  )}
                  prefetch={false}
                >
                  {item.label}
                  <ChevronDown
                    className="h-4 w-4 shrink-0 transition-transform duration-200 group-data-[state=open]:rotate-180 text-muted-foreground group-hover:text-primary"
                  />
                </Link>
              </HoverCardTrigger>
              <HoverCardContent
                align="center"
                sideOffset={10}
                className="w-auto max-w-xl p-4 bg-card text-card-foreground shadow-xl rounded-lg z-[60] border-border"
              >
                {isIndustries && item.href && (
                  <>
                    <div className="mb-3">
                      <Link href={item.href} className="flex items-center text-sm font-medium text-primary hover:underline" prefetch={false}>
                        See All Industries <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </div>
                    <Separator className="mb-4 bg-border" />
                  </>
                )}
                <div className={cn("grid gap-x-6 gap-y-4", isIndustries ? "grid-cols-2" : "grid-cols-2")}>
                  {isIndustries ? (
                    item.serviceItems.map((industryItem) => (
                      <div key={industryItem.title} className="group/service-item flex flex-col p-3 -m-3 rounded-lg transition-all duration-200 ease-in-out">
                        <Link
                          href={industryItem.href}
                          className="flex items-start gap-3"
                          prefetch={false}
                        >
                          <div className="text-primary mt-1 flex-shrink-0">
                            <industryItem.icon className="h-5 w-5" />
                          </div>
                          <div className="flex-grow">
                            <p className="font-semibold text-card-foreground group-hover/service-item:text-primary transition-colors duration-150 text-sm">
                              {industryItem.title}
                            </p>

                          </div>
                        </Link>
                      </div>
                    ))
                  ) : (
                    <>
                      <div> {/* Column 1 for Services */}
                        <h4 className="font-headline text-[0.9rem] font-semibold text-card-foreground mb-2">{col1TitleServices}</h4>
                        <div className="space-y-1">
                          {firstColumnItemsServices.map((service) => (
                             <div key={service.title} className="group/service-item flex flex-col p-3 -m-3 rounded-lg transition-all duration-200 ease-in-out ">
                                <Link
                                  href={service.href}
                                  className="flex items-start gap-3"
                                  prefetch={false}
                                >
                                  <div className="text-primary group-hover/service-item:text-primary mt-1 flex-shrink-0">
                                    <service.icon className="h-5 w-5" />
                                  </div>
                                  <div className="flex-grow">
                                    <p className="font-semibold text-card-foreground group-hover/service-item:text-primary transition-colors duration-150 text-sm">
                                      {service.title}
                                    </p>
                                  </div>
                                </Link>
                                {service.subServices && service.subServices.length > 0 && (
                                  <ul className="mt-1.5 space-y-1 pl-8 list-none">
                                    {service.subServices.map((subService) => (
                                      <li key={subService.href}>
                                        <Link
                                          href={subService.href}
                                          className="block text-xs text-card-foreground/70 hover:text-primary hover:underline transition-colors duration-150"
                                          prefetch={false}
                                        >
                                          {subService.label}
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                )}
                              </div>
                          ))}
                        </div>
                      </div>
                      <div> {/* Column 2 for Services */}
                        <h4 className="font-headline text-[0.9rem] font-semibold text-card-foreground mb-2">{col2TitleServices}</h4>
                         <div className="space-y-1">
                          {secondColumnItemsServices.map((service) => (
                            <div key={service.title} className="group/service-item flex flex-col p-3 -m-3 rounded-lg transition-all duration-200 ease-in-out ">
                              <Link
                                href={service.href}
                                className="flex items-start gap-3"
                                prefetch={false}
                              >
                                <div className="text-primary group-hover/service-item:text-primary mt-1 flex-shrink-0">
                                  <service.icon className="h-5 w-5" />
                                </div>
                                <div className="flex-grow">
                                  <p className="font-semibold text-card-foreground group-hover/service-item:text-primary transition-colors duration-150 text-sm">
                                    {service.title}
                                  </p>

                                </div>
                              </Link>
                               {service.subServices && service.subServices.length > 0 && (
                                <ul className="mt-1.5 space-y-1 pl-8 list-none">
                                  {service.subServices.map((subService) => (
                                    <li key={subService.href}>
                                      <Link
                                        href={subService.href}
                                        className="block text-xs text-card-foreground/70 hover:text-primary hover:underline transition-colors duration-150"
                                        prefetch={false}
                                      >
                                        {subService.label}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </HoverCardContent>
            </HoverCard>
          );
        } else if (item.children && item.children.length > 0) {
          const triggerContent = (
            <>
              {item.label}
              <ChevronDown
                className={cn(
                  "h-4 w-4 shrink-0 transition-transform duration-200 group-data-[state=open]:rotate-180 text-muted-foreground group-hover:text-primary",
                  isMobile ? "ml-auto" : ""
                )}
              />
            </>
          );

          const triggerElement = isMobile ? (
            <div className={cn(navLinkClasses(item.href, item.disabled, true, isActive), "flex items-center justify-between w-full")}>
              {triggerContent}
            </div>
          ) : (
             <span className={cn(navLinkClasses(item.href, item.disabled, true, isActive), "flex items-center group outline-none gap-1")}>
              {triggerContent}
            </span>
          );

          return (
            <DropdownMenu key={item.label}>
              <DropdownMenuTrigger
                className={cn(
                  "outline-none",
                   isMobile ? "w-full" : navLinkClasses(item.href, item.disabled, true, isActive)
                )}
                asChild={!isMobile}
              >
               {triggerElement}
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align={isMobile ? "center" : "start"}
                className={cn(
                  isMobile ? "w-[calc(100vw-5rem)] min-w-[calc(100vw-5rem)]" : "min-w-[220px]",
                  "mt-1 z-[60] bg-card text-card-foreground border-border shadow-xl"
                )}
              >
                {item.children.map((child) => {
                  const menuItemContent = (
                    <Link
                      href={child.href}
                      className={dropdownMenuItemLinkClasses(child.href, child.disabled)}
                      prefetch={false}
                    >
                      {child.label}
                    </Link>
                  );

                  if (isMobile) {
                    return (
                      <SheetClose asChild key={child.href}>
                        <DropdownMenuItem asChild className="focus:bg-accent/20 focus:text-primary">{menuItemContent}</DropdownMenuItem>
                      </SheetClose>
                    );
                  }
                  return (
                    <DropdownMenuItem asChild key={child.href} className="focus:bg-accent/20 focus:text-primary">{menuItemContent}</DropdownMenuItem>
                  );
                })}
              </DropdownMenuContent>
            </DropdownMenu>
          );
        } else if (item.href) {
          if (isMobile && item.serviceItems && item.serviceItems.length > 0) {
             return (
                <div key={item.label} className="w-full">
                    <SheetClose asChild>
                        <Link
                            href={item.href}
                            className={cn(navLinkClasses(item.href, item.disabled, false, isActive), "font-semibold text-foreground flex items-center justify-between w-full")}
                            prefetch={false}
                        >
                        {item.label}
                        </Link>
                    </SheetClose>
                    <div className="ml-0 mt-1 space-y-1 pt-1">
                    {item.serviceItems.map(serviceLink => (
                         <SheetClose asChild key={serviceLink.href}>
                             <Link
                                href={serviceLink.href}
                                className={cn(navLinkClasses(serviceLink.href, item.disabled, false, pathname.startsWith(serviceLink.href)), "flex items-center gap-3 p-2 rounded-md hover:bg-accent/20")}
                             >
                                <serviceLink.icon className="h-5 w-5 text-primary flex-shrink-0" />
                                <div>
                                  <span className="block text-sm text-foreground">{serviceLink.title}</span>
                                </div>
                             </Link>
                         </SheetClose>
                     ))}
                    </div>
                </div>
             );
          }

          const linkElement = (
            <Link
              key={item.href}
              href={item.href}
              className={navLinkClasses(item.href, item.disabled, false, isActive)}
              prefetch={false}
            >
              {item.label}
            </Link>
          );
          if (isMobile) {
            return <SheetClose asChild key={item.href}>{linkElement}</SheetClose>;
          }
          return linkElement;
        }
        return null;
      })}
    </>
  );
}
