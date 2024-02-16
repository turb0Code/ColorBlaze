<script>
	export let mainColor = "#000000";
	export let accentColor = "#000000";
	export let accent2Color = "#000000";
	export let accent3Color = "#000000";
</script>

<svg xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    xmlns:krita="http://krita.org/namespaces/svg/krita"
    xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
    width="180pt"
    height="180pt"
    viewBox="0 0 180 180">
	<defs>
		<radialGradient id="gradient0" gradientUnits="objectBoundingBox" cx="0" cy="0" fx="0" fy="0" r="1.4142135623731" spreadMethod="pad">
		<stop stop-color={`${mainColor}`} offset="0" stop-opacity="1"/>
		<stop stop-color={`${accentColor}`} offset="0.2013" stop-opacity="1"/>
		<stop stop-color={`${accent2Color}`} offset="0.8389" stop-opacity="1"/>
		<stop stop-color={`${accent3Color}`} offset="1" stop-opacity="0"/>
		</radialGradient>
		<radialGradient id="gradient1" gradientUnits="objectBoundingBox" cx="0" cy="0" fx="0" fy="0" r="1.4142135623731" spreadMethod="pad">
		<stop stop-color={`${mainColor}`} offset="0" stop-opacity="1"/>
		<stop stop-color={`${accentColor}`} offset="1" stop-opacity="1"/>
		</radialGradient>
		<radialGradient id="gradient2" gradientUnits="objectBoundingBox" cx="0" cy="0" fx="0" fy="0" r="1.4142135623731" spreadMethod="pad">
		<stop stop-color={`${accent2Color}`} offset="0" stop-opacity="1"/>
		<stop stop-color={`${accent3Color}`} offset="1" stop-opacity="1"/>
		</radialGradient>
		<linearGradient id="gradient3" gradientUnits="objectBoundingBox" x1="0" y1="0" x2="1.4142135623731" y2="0" spreadMethod="pad">
		<stop stop-color={`${accent3Color}`} offset="0.302" stop-opacity="1"/>
		<stop stop-color={`${accentColor}`} offset="0.5839" stop-opacity="1"/>
		<stop stop-color={`${accent2Color}`} offset="0.9262" stop-opacity="1"/>
		<stop stop-color={`${mainColor}`} offset="1" stop-opacity="0"/>
		</linearGradient>
		<linearGradient id="gradient4" gradientUnits="objectBoundingBox" x1="0" y1="0" x2="1.88063147282086" y2="1.28813559322034" spreadMethod="pad">
		<stop stop-color={`${accent2Color}`} offset="0.00671140939597315" stop-opacity="1"/>
		<stop stop-color={`${mainColor}`} offset="0.0201" stop-opacity="1"/>
		<stop stop-color={`${accentColor}`} offset="0.4362" stop-opacity="1"/>
		<stop stop-color={`${accent3Color}`} offset="0.8389" stop-opacity="1"/>
		<stop stop-color={`${accent2Color}`} offset="1" stop-opacity="0"/>
		</linearGradient>
 </defs>
	<ellipse id="shape0" transform="translate(6.71999998544362, 12.9600000233238)" rx="42.84" ry="42.84" cx="42.84" cy="42.84" fill="url(#gradient0)" fill-rule="evenodd" stroke="#000000" stroke-width="3.6" stroke-linecap="square" stroke-linejoin="bevel"/><path id="shape1" transform="translate(55.9200000316829, 32.5773913228054)" fill="none" stroke="url(#gradient1)" stroke-width="3.6" stroke-linecap="square" stroke-linejoin="bevel" d="M0 12.7826C67.2 -9.61739 90.24 -2.57739 69.12 33.9026L69.36 33.9026" sodipodi:nodetypes="ccc"/><path id="shape2" transform="translate(44.400000025156, 92.4000000523516)" fill="none" stroke="#000000" stroke-width="3.6" stroke-linecap="square" stroke-linejoin="bevel" d="M0 0C56.96 23.84 70.8 49.36 41.52 76.56L41.52 76.56" sodipodi:nodetypes="ccc"/><path id="shape3" transform="translate(75.3600000426972, 72.2400000409294)" fill="none" stroke="#000000" stroke-width="3.6" stroke-linecap="square" stroke-linejoin="bevel" d="M0 0C66.88 24.64 93.44 49.68 79.68 75.12" sodipodi:nodetypes="cc"/><path id="shape4" transform="translate(65.760000037258, 13.2000000074788)" fill="none" stroke="url(#gradient2)" stroke-width="3.6" stroke-linecap="square" stroke-linejoin="bevel" d="M0 42.72C44.96 27.36 73.92 13.12 86.88 0L86.88 0L86.88 0" sodipodi:nodetypes="cccc"/><path id="shape5" transform="translate(15.9190481729528, 80.7617279813979)" fill="url(#gradient3)" fill-rule="evenodd" stroke="#000000" stroke-width="3.6" stroke-linecap="square" stroke-linejoin="bevel" d="M18.401 75.4783C-3.83905 53.0783 -5.91905 34.9183 12.161 20.9983C7.68095 45.6383 12.801 55.3183 27.521 50.0383C42.241 44.7583 49.521 30.3583 49.361 6.83827C130.801 -7.40173 146.241 0.598275 95.681 30.8383C19.841 76.1983 19.841 76.1983 18.401 75.4783Z" sodipodi:nodetypes="cczccc"/><path id="shape6" transform="translate(97.9199995161478, 9.59999995256351)" fill="url(#gradient4)" fill-rule="evenodd" stroke="#000000" stroke-width="3.6" stroke-linecap="square" stroke-linejoin="bevel" d="M0 4.8L62.16 0L32.88 37.68L64.32 35.28L30.96 73.2L59.04 69.12L21.84 113.28L0 4.8" sodipodi:nodetypes="cccccccc"/>
</svg>
