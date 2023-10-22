<template name="skeleton">
    <view class="sk-container">
        <scroll-view refresher-enabled="true" scroll-y="true" class="scroll-view">
            <view is="components/XtxSwiper">
                <view class="carousel XtxSwiper--carousel">
                    <swiper circular="true" interval="3000" current="0" autoplay="false">
                        <swiper-item
                            style="position: absolute; width: 100%; height: 100%; transform: translate(0%, 0px) translateZ(0px);">
                            <navigator class="navigator XtxSwiper--navigator" hover-class="none">
                                <image class="image XtxSwiper--image sk-image" mode="aspectFill"></image>
                            </navigator>
                        </swiper-item>
                    </swiper>
                    <view class="indicator XtxSwiper--indicator">
                        <text class="dot XtxSwiper--dot active XtxSwiper--active"></text>
                        <text class="dot XtxSwiper--dot"></text>
                        <text class="dot XtxSwiper--dot"></text>
                        <text class="dot XtxSwiper--dot"></text>
                        <text class="dot XtxSwiper--dot"></text>
                    </view>
                </view>
            </view>
            <view is="pages/index/components/CategoryPanel">
                <view class="category CategoryPanel--category">
                    <navigator class="category-item CategoryPanel--category-item" hover-class="none">
                        <image class="icon CategoryPanel--icon sk-image"></image>
                        <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-957 sk-text">居家</text>
                    </navigator>
                    <navigator class="category-item CategoryPanel--category-item" hover-class="none">
                        <image class="icon CategoryPanel--icon sk-image"></image>
                        <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-349 sk-text">锦鲤</text>
                    </navigator>
                    <navigator class="category-item CategoryPanel--category-item" hover-class="none">
                        <image class="icon CategoryPanel--icon sk-image"></image>
                        <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-200 sk-text">服饰</text>
                    </navigator>
                    <navigator class="category-item CategoryPanel--category-item" hover-class="none">
                        <image class="icon CategoryPanel--icon sk-image"></image>
                        <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-922 sk-text">母婴</text>
                    </navigator>
                    <navigator class="category-item CategoryPanel--category-item" hover-class="none">
                        <image class="icon CategoryPanel--icon sk-image"></image>
                        <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-398 sk-text">个护</text>
                    </navigator>
                    <navigator class="category-item CategoryPanel--category-item" hover-class="none">
                        <image class="icon CategoryPanel--icon sk-image"></image>
                        <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-589 sk-text">严选</text>
                    </navigator>
                    <navigator class="category-item CategoryPanel--category-item" hover-class="none">
                        <image class="icon CategoryPanel--icon sk-image"></image>
                        <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-936 sk-text">数码</text>
                    </navigator>
                    <navigator class="category-item CategoryPanel--category-item" hover-class="none">
                        <image class="icon CategoryPanel--icon sk-image"></image>
                        <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-112 sk-text">运动</text>
                    </navigator>
                    <navigator class="category-item CategoryPanel--category-item" hover-class="none">
                        <image class="icon CategoryPanel--icon sk-image"></image>
                        <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-697 sk-text">杂项</text>
                    </navigator>
                    <navigator class="category-item CategoryPanel--category-item" hover-class="none">
                        <image class="icon CategoryPanel--icon sk-image"></image>
                        <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-221 sk-text">品牌</text>
                    </navigator>
                </view>
            </view>
            <view is="pages/index/components/HotPanel">
                <view class="panel HotPanel--panel hot HotPanel--hot">
                    <view class="item HotPanel--item">
                        <view class="title HotPanel--title">
                            <text
                                class="title-text HotPanel--title-text sk-transparent sk-text-14-2857-830 sk-text">特惠推荐</text>
                            <text
                                class="title-desc HotPanel--title-desc sk-transparent sk-text-14-2857-461 sk-text">精选全攻略</text>
                        </view>
                        <navigator class="cards HotPanel--cards" hover-class="none">
                            <image class="image HotPanel--image sk-image" mode="aspectFit"></image>
                            <image class="image HotPanel--image sk-image" mode="aspectFit"></image>
                        </navigator>
                    </view>
                    <view class="item HotPanel--item">
                        <view class="title HotPanel--title">
                            <text
                                class="title-text HotPanel--title-text sk-transparent sk-text-14-2857-533 sk-text">爆款推荐</text>
                            <text
                                class="title-desc HotPanel--title-desc sk-transparent sk-text-14-2857-996 sk-text">最受欢迎</text>
                        </view>
                        <navigator class="cards HotPanel--cards" hover-class="none">
                            <image class="image HotPanel--image sk-image" mode="aspectFit"></image>
                            <image class="image HotPanel--image sk-image" mode="aspectFit"></image>
                        </navigator>
                    </view>
                    <view class="item HotPanel--item">
                        <view class="title HotPanel--title">
                            <text
                                class="title-text HotPanel--title-text sk-transparent sk-text-14-2857-238 sk-text">一站买全</text>
                            <text
                                class="title-desc HotPanel--title-desc sk-transparent sk-text-14-2857-32 sk-text">精心优选</text>
                        </view>
                        <navigator class="cards HotPanel--cards" hover-class="none">
                            <image class="image HotPanel--image sk-image" mode="aspectFit"></image>
                            <image class="image HotPanel--image sk-image" mode="aspectFit"></image>
                        </navigator>
                    </view>
                    <view class="item HotPanel--item">
                        <view class="title HotPanel--title">
                            <text
                                class="title-text HotPanel--title-text sk-transparent sk-text-14-2857-430 sk-text">新鲜好物</text>
                            <text
                                class="title-desc HotPanel--title-desc sk-transparent sk-text-14-2857-463 sk-text">生活加分项</text>
                        </view>
                        <navigator class="cards HotPanel--cards" hover-class="none">
                            <image class="image HotPanel--image sk-image" mode="aspectFit"></image>
                            <image class="image HotPanel--image sk-image" mode="aspectFit"></image>
                        </navigator>
                    </view>
                </view>
            </view>
        </scroll-view>
    </view>
</template>




<style>
.sk-transparent {
    color: transparent !important;
}

.sk-text-3-5714-322 {
    background-image: linear-gradient(transparent 3.5714%, #EEEEEE 0%, #EEEEEE 96.4286%, transparent 0%) !important;
    background-size: 100% 28.0000rpx;
    position: relative !important;
}

.sk-text {
    background-origin: content-box !important;
    background-clip: content-box !important;
    background-color: transparent !important;
    color: transparent !important;
    background-repeat: repeat-y !important;
}

.sk-text-14-2857-597 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 39.2000rpx;
    position: relative !important;
}

.sk-text-14-2857-957 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 36.4000rpx;
    position: relative !important;
}

.sk-text-14-2857-349 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 36.4000rpx;
    position: relative !important;
}

.sk-text-14-2857-200 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 36.4000rpx;
    position: relative !important;
}

.sk-text-14-2857-922 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 36.4000rpx;
    position: relative !important;
}

.sk-text-14-2857-398 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 36.4000rpx;
    position: relative !important;
}

.sk-text-14-2857-589 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 36.4000rpx;
    position: relative !important;
}

.sk-text-14-2857-936 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 36.4000rpx;
    position: relative !important;
}

.sk-text-14-2857-112 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 36.4000rpx;
    position: relative !important;
}

.sk-text-14-2857-697 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 36.4000rpx;
    position: relative !important;
}

.sk-text-14-2857-221 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 36.4000rpx;
    position: relative !important;
}

.sk-text-14-2857-830 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 44.8000rpx;
    position: relative !important;
}

.sk-text-14-2857-461 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 33.6000rpx;
    position: relative !important;
}

.sk-text-14-2857-533 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 44.8000rpx;
    position: relative !important;
}

.sk-text-14-2857-996 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 33.6000rpx;
    position: relative !important;
}

.sk-text-14-2857-238 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 44.8000rpx;
    position: relative !important;
}

.sk-text-14-2857-32 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 33.6000rpx;
    position: relative !important;
}

.sk-text-14-2857-430 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 44.8000rpx;
    position: relative !important;
}

.sk-text-14-2857-463 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 33.6000rpx;
    position: relative !important;
}

.sk-image {
    background: #EFEFEF !important;
}

.sk-pseudo::before,
.sk-pseudo::after {
    background: #EFEFEF !important;
    background-image: none !important;
    color: transparent !important;
    border-color: transparent !important;
}

.sk-pseudo-rect::before,
.sk-pseudo-rect::after {
    border-radius: 0 !important;
}

.sk-pseudo-circle::before,
.sk-pseudo-circle::after {
    border-radius: 50% !important;
}

.sk-container {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-color: transparent;
}</style>