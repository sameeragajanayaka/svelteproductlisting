import { writable } from 'svelte/store';

export const categoryFilter = writable('');
export const priceRangeFilter = writable([0, 100000]);
export const sortBy = writable('name'); // 'name' or 'price'
export const sortOrder = writable('asc'); // 'asc' or 'desc'
