<template>
    <div class="homepage-2 download-page inner">
        <ScrollupSection />
        <div class="main">
            <HeaderSection />
            <section id="home" class="section welcome-area inner-area bg-overlay h-100vh overflow-hidden">
                <div class="container h-100">
                    <div class="row align-items-center h-100">
                        <!-- Welcome Intro Start -->
                        <div class="col-12 col-md-7">
                            <div class="welcome-intro">
                                <h1 class="text-white">Your download should begin automatically</h1>
                                <p class="text-white mt-4">If it doesn’t start automatically, please click <a href="#" class="text-white text-underlined">here</a> to downlaod manually.</p>
                            </div>
                        </div>
                        <div class="col-12 col-md-5">
                            <!-- Welcome Thumb -->
                            <div class="welcome-thumb" data-aos="fade-right" data-aos-delay="500" data-aos-duration="1000">
                                <img src="assets/img/features_thumb.png" alt="">
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<script>
import ScrollupSection from '../../ScrollupSection/scrollUp'
import HeaderSection from '../../HeaderSection/headerOne'

export default {
    name: 'Download',
    components: {
        ScrollupSection,
        HeaderSection
    }
}
</script>

<style>

</style>