import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { setAds } from "../../../store/slices/adSlice";
import { getAllAdsApi } from "../../../services/ads.service";
import AdsSlider from "./ads-slider";
const Ads = () => {
    const dispatch = useDispatch();
    const AdsData = useSelector((state) => state.ad.ads);
    const [data, setData] = useState([]); // typed as Ad[]
    const [isLoading, setIsLoading] = useState(true);
    const getAllAds = async () => {
        setIsLoading(true);
        const response = await getAllAdsApi();
        if (response?.status === 200) {
            const adsData = response.data; // Type the response here
            setData(adsData.data); // Set the ads data correctly
            dispatch(setAds(adsData.data)); // Dispatch with typed data
        }
        setIsLoading(false);
    };
    useEffect(() => {
        if (!AdsData || AdsData?.data?.length === 0) {
            getAllAds();
        }
        else {
            setData(AdsData);
            setIsLoading(false);
        }
    }, [AdsData]);
    return ((isLoading || data.length > 0) && (_jsx("section", { className: "inner-section", children: _jsxs(Container, { children: [_jsx("div", { className: "section-title", children: "Ads" }), _jsx("div", { className: "section-description", children: _jsx("div", { className: "content", children: "Lorem ipsum dolor sit amet consectetur. Nulla aliquam nisl augue amet non elit vel purus. Auctor aenean ut euismod at integer id nulla cursus te" }) }), _jsx(AdsSlider, { data: data, isLoading: isLoading })] }) })));
};
export default React.memo(Ads);
