declare const store: import("@reduxjs/toolkit").EnhancedStore<{
    ad: {
        ads: null;
    };
    product: {
        products: null;
    };
}, import("redux").UnknownAction, import("@reduxjs/toolkit").Tuple<[import("redux").StoreEnhancer<{
    dispatch: import("redux-thunk").ThunkDispatch<{
        ad: {
            ads: null;
        };
        product: {
            products: null;
        };
    }, undefined, import("redux").UnknownAction>;
}>, import("redux").StoreEnhancer]>>;
export type RootState = ReturnType<typeof store.getState>;
export default store;
