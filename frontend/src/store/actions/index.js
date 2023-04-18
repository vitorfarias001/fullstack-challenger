import { createAction } from "@reduxjs/toolkit";

export const setSearchTerm = createAction("search/setSearchTerm");
export const setMovie = createAction("search/setMovie");
export const resetSearch = createAction("search/resetSearch");
