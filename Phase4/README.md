## Phase 4: Server State & Global State (2 weeks)

**Server state, most important for jobs**
- **TanStack Query (React Query)**: `useQuery`, `useMutation`, caching, invalidation, loading/error states, pagination, infinite scroll, optimistic updates
- **Axios** (or fetch wrapper), interceptors, base URL

**Client/global state**
- When you actually need global state (and when you don't)
- **Zustand** (simple, popular) → learn first
- **Redux Toolkit**: slices, store, `useSelector/useDispatch`. Many job listings still ask for it, so learn the basics
- Context vs Zustand vs Redux: know the trade-offs (interview question)

**Auth flow on frontend**
- Login/signup, JWT, access/refresh token concept
- Storing tokens (httpOnly cookies vs localStorage, know the security trade-off)
- Protected routes + auth context/store