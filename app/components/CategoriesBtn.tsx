"use client";

import { Dropdown } from "flowbite-react";

export function CategoriesBtn() {
    return (
        <Dropdown label="Catégorie" className="flex flex-end">
            <Dropdown.Item onClick={() => alert("Dashboard!")}>
                Dashboard
            </Dropdown.Item>
            <Dropdown.Item onClick={() => alert("Settings!")}>
                Settings
            </Dropdown.Item>
            <Dropdown.Item onClick={() => alert("Earnings!")}>
                Earnings
            </Dropdown.Item>
            <Dropdown.Item onClick={() => alert("Sign out!")}>
                Sign out
            </Dropdown.Item>
        </Dropdown>
    );
}
