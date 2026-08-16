"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Dialog, DialogPanel } from "@headlessui/react";
import {
    Menu,
    X,
    ChevronDown,
    ChevronRight,
} from "lucide-react";
import { usePathname } from "next/navigation";
import clsx from "clsx";

import navigationConfig from "@/util/navigation";

/**
 * Returns true when the current route belongs to this item
 * or any of its descendants.
 */
function isItemActive(item, pathname) {
    if (item.href === pathname) {
        return true;
    }

    if (!item.children) {
        return false;
    }

    return item.children.some((child) =>
        isItemActive(child, pathname)
    );
}

/**
 * Desktop dropdown item.
 *
 * Submenus use position: fixed rather than absolute.
 * This allows us to calculate their position against the
 * viewport and prevent them from going outside the screen.
 */
function DesktopDropdownItem({
    item,
    pathname,
    level = 0,
}) {
    const [open, setOpen] = useState(false);
    const [menuPosition, setMenuPosition] = useState({
        top: 0,
        left: 0,
    });

    const triggerRef = useRef(null);
    const menuRef = useRef(null);
    const closeTimeoutRef = useRef(null);

    const hasChildren =
        Array.isArray(item.children) && item.children.length > 0;

    const active = isItemActive(item, pathname);

    const clearCloseTimeout = () => {
        if (closeTimeoutRef.current) {
            clearTimeout(closeTimeoutRef.current);
            closeTimeoutRef.current = null;
        }
    };

    const openMenu = () => {
        clearCloseTimeout();
        setOpen(true);
    };

    const closeMenu = () => {
        clearCloseTimeout();

        // Small delay gives the pointer enough time to
        // travel from the trigger to the submenu.
        closeTimeoutRef.current = setTimeout(() => {
            setOpen(false);
        }, 180);
    };

    const calculatePosition = () => {
        if (!triggerRef.current || !menuRef.current) {
            return;
        }

        const triggerRect =
            triggerRef.current.getBoundingClientRect();

        const menuRect =
            menuRef.current.getBoundingClientRect();

        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;

        const margin = 8;

        let left;
        let top;

        if (level === 0) {
            /*
             * First-level dropdown.
             *
             * We intentionally use the exact bottom of the
             * trigger instead of adding a gap. This prevents
             * the pointer from crossing an empty area.
             */
            left = triggerRect.left;
            top = triggerRect.bottom;

            // Flip/clamp horizontally.
            if (left + menuRect.width > viewportWidth - margin) {
                left = viewportWidth - menuRect.width - margin;
            }

            left = Math.max(margin, left);
        } else {
            /*
             * Nested dropdown.
             *
             * Open directly beside the parent item.
             */
            left = triggerRect.right;
            top = triggerRect.top;

            /*
             * Not enough room on the right:
             * open the submenu on the left.
             */
            if (left + menuRect.width > viewportWidth - margin) {
                left = triggerRect.left - menuRect.width;
            }

            /*
             * Final horizontal safety clamp.
             */
            left = Math.max(
                margin,
                Math.min(
                    left,
                    viewportWidth - menuRect.width - margin
                )
            );
        }

        /*
         * Keep the menu inside the viewport vertically.
         */
        if (
            top + menuRect.height >
            viewportHeight - margin
        ) {
            top =
                viewportHeight -
                menuRect.height -
                margin;
        }

        top = Math.max(margin, top);

        setMenuPosition({
            top,
            left,
        });
    };

    useEffect(() => {
        if (!open) {
            return;
        }

        const frame = requestAnimationFrame(() => {
            calculatePosition();
        });

        window.addEventListener("resize", calculatePosition);
        window.addEventListener(
            "scroll",
            calculatePosition,
            true
        );

        return () => {
            cancelAnimationFrame(frame);

            window.removeEventListener(
                "resize",
                calculatePosition
            );

            window.removeEventListener(
                "scroll",
                calculatePosition,
                true
            );
        };
    }, [open, level]);

    useEffect(() => {
        return () => {
            clearCloseTimeout();
        };
    }, []);

    if (!hasChildren) {
        return (
            <Link
                href={item.href}
                className={clsx(
                    "flex items-center justify-between rounded-md",
                    "px-4 py-2.5 text-sm font-medium",
                    "transition-colors duration-150",
                    item.isViewAll
                        ? [
                            "mt-2 border-t border-gray-100",
                            "pt-3 font-semibold text-sky-700",
                            "hover:text-sky-800",
                        ]
                        : [
                            "hover:bg-sky-50 hover:text-sky-700",
                            active
                                ? "bg-sky-50 text-sky-700"
                                : "text-gray-700",
                        ]
                )}
            >
                <span>{item.title}</span>

                {item.isViewAll && (
                    <ChevronRight
                        aria-hidden="true"
                        className="h-4 w-4"
                    />
                )}
            </Link>
        );
    }

    return (
        <div
            className="relative"
            onMouseEnter={openMenu}
            onMouseLeave={closeMenu}
        >
            {/* Trigger */}
            <div
                ref={triggerRef}
                className={clsx(
                    "flex items-center justify-between gap-4",
                    "rounded-md px-4 py-2.5",
                    "cursor-pointer text-sm font-medium",
                    "transition-colors duration-150",
                    active
                        ? "bg-sky-50 text-sky-700"
                        : "text-gray-700 hover:bg-sky-50 hover:text-sky-700"
                )}
            >
                <Link
                    href={item.href || "#"}
                    className="min-w-0 flex-1"
                    onClick={() => setOpen(false)}
                >
                    {item.title}
                </Link>

                {level === 0 ? (
                    <ChevronDown
                        aria-hidden="true"
                        className={clsx(
                            "h-4 w-4 shrink-0 transition-transform",
                            open && "rotate-180"
                        )}
                    />
                ) : (
                    <ChevronRight
                        aria-hidden="true"
                        className="h-4 w-4 shrink-0"
                    />
                )}
            </div>

            {/* Dropdown */}
            {open && (
                <div
                    ref={menuRef}
                    className={clsx(
                        "fixed z-100",
                        "w-64 max-w-[calc(100vw-1rem)]",
                        "rounded-lg border border-gray-200 bg-white",
                        "p-2 shadow-xl shadow-gray-900/10",
                        "max-h-[calc(100vh-1rem)] overflow-y-auto"
                    )}
                    style={{
                        top: `${menuPosition.top}px`,
                        left: `${menuPosition.left}px`,
                    }}
                    onMouseEnter={openMenu}
                    onMouseLeave={closeMenu}
                >
                    <div className="space-y-1">
                        {item.children.map((child) => (
                            <DesktopDropdownItem
                                key={`${child.title}-${child.href}`}
                                item={child}
                                pathname={pathname}
                                level={level + 1}
                            />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

/**
 * Mobile navigation item.
 *
 * Mobile menus use an accordion instead of hover.
 * This supports unlimited nesting without requiring
 * horizontal space.
 */
function MobileNavigationItem({
    item,
    pathname,
    closeMenu,
    level = 0,
}) {
    const hasChildren =
        Array.isArray(item.children) && item.children.length > 0;

    const active = isItemActive(item, pathname);

    const [open, setOpen] = useState(active);

    if (!hasChildren) {
        return (
            <Link
                href={item.href}
                onClick={closeMenu}
                className={clsx(
                    "block rounded-lg px-3 py-2.5 text-sm font-semibold",
                    "transition-colors",
                    active
                        ? "bg-sky-50 text-sky-700"
                        : "text-gray-900 hover:bg-gray-50"
                )}
                style={{
                    paddingLeft: `${12 + level * 16}px`,
                }}
            >
                {item.title}
            </Link>
        );
    }

    return (
        <div>
            <div
                className={clsx(
                    "flex items-center rounded-lg",
                    active
                        ? "bg-sky-50 text-sky-700"
                        : "text-gray-900"
                )}
            >
                <Link
                    href={item.href || "#"}
                    onClick={closeMenu}
                    className="min-w-0 flex-1 px-3 py-2.5 text-sm font-semibold"
                    style={{
                        paddingLeft: `${12 + level * 16}px`,
                    }}
                >
                    {item.title}
                </Link>

                <button
                    type="button"
                    aria-expanded={open}
                    aria-label={`${open ? "Collapse" : "Expand"} ${item.title}`}
                    onClick={() => setOpen((value) => !value)}
                    className="mr-1 rounded-md p-2 hover:bg-white"
                >
                    <ChevronDown
                        aria-hidden="true"
                        className={clsx(
                            "h-5 w-5 transition-transform",
                            open && "rotate-180"
                        )}
                    />
                </button>
            </div>

            {open && (
                <div className="mt-1 space-y-1">
                    {item.children.map((child) => (
                        <MobileNavigationItem
                            key={`${child.title}-${child.href}`}
                            item={child}
                            pathname={pathname}
                            closeMenu={closeMenu}
                            level={level + 1}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}

export default function NavBar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const pathname = usePathname();

    const closeMobileMenu = () => {
        setMobileMenuOpen(false);
    };

    return (
        <div className="container mx-auto">
            <nav
                aria-label="Global"
                className="flex items-center justify-between py-6 lg:px-8"
            >
                {/* Logo */}
                <div className="flex lg:flex-1">
                    <Link
                        href="/"
                        aria-label="Navigate to the home page"
                        className="flex items-center space-x-2 text-lg font-headline font-bold"
                    >
                        <img
                            alt="Logo"
                            src="/iotecs-logo.svg"
                            className="h-10 w-auto"
                        />

                        <span>SD IoTecs</span>
                    </Link>
                </div>

                {/* Mobile menu button */}
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen(true)}
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                    >
                        <span className="sr-only">
                            Open main menu
                        </span>

                        <Menu
                            aria-hidden="true"
                            className="h-6 w-6"
                        />
                    </button>
                </div>

                {/* Desktop navigation */}
                <div className="hidden items-center gap-x-3 lg:flex">
                    {navigationConfig.map((item) => {
                        const active = isItemActive(
                            item,
                            pathname
                        );

                        if (item.children?.length) {
                            return (
                                <DesktopDropdownItem
                                    key={`${item.title}-${item.href}`}
                                    item={item}
                                    pathname={pathname}
                                />
                            );
                        }

                        return (
                            <Link
                                key={`${item.title}-${item.href}`}
                                href={item.href}
                                className={clsx(
                                    "rounded-md px-4 py-2.5",
                                    "text-sm font-semibold",
                                    "transition-colors duration-150",
                                    active
                                        ? "text-sky-700"
                                        : "text-gray-900 hover:text-sky-700"
                                )}
                            >
                                {item.title}
                            </Link>
                        );
                    })}
                </div>
            </nav>

            {/* Mobile navigation */}
            <Dialog
                open={mobileMenuOpen}
                onClose={setMobileMenuOpen}
                className="relative z-50 lg:hidden"
            >
                {/* Backdrop */}
                <div
                    className="fixed inset-0 bg-gray-900/20"
                    aria-hidden="true"
                />

                <DialogPanel
                    className={clsx(
                        "fixed inset-y-0 right-0",
                        "w-full sm:max-w-sm",
                        "overflow-y-auto bg-white",
                        "px-6 py-6 shadow-xl",
                        "ring-1 ring-gray-900/10"
                    )}
                >
                    {/* Mobile header */}
                    <div className="flex items-center justify-between">
                        <Link
                            href="/"
                            aria-label="Navigate to the home page"
                            onClick={closeMobileMenu}
                            className="flex items-center space-x-2 text-lg font-headline font-bold"
                        >
                            <img
                                alt="Logo"
                                src="/iotecs-logo.svg"
                                className="h-10 w-auto"
                            />

                            <span>SD IoTecs</span>
                        </Link>

                        <button
                            type="button"
                            onClick={closeMobileMenu}
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                        >
                            <span className="sr-only">
                                Close menu
                            </span>

                            <X
                                aria-hidden="true"
                                className="h-6 w-6"
                            />
                        </button>
                    </div>

                    {/* Mobile menu */}
                    <div className="mt-8 flow-root">
                        <div className="-my-2">
                            <div className="space-y-1 py-2">
                                {navigationConfig.map((item) => (
                                    <MobileNavigationItem
                                        key={`${item.title}-${item.href}`}
                                        item={item}
                                        pathname={pathname}
                                        closeMenu={closeMobileMenu}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </DialogPanel>
            </Dialog>
        </div>
    );
}