import { createAction } from '@reduxjs/toolkit';
import { Routes } from '../const';

export const REDIRECT_TO_ROUTE_TYPE = 'app/redirectToRoute';

export const redirectToRoute = createAction<Routes>(REDIRECT_TO_ROUTE_TYPE);
