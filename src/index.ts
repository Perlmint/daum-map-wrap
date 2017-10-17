/// <reference path="../daum_map.d.ts" />
export default function (apikey: string, ...libraries: ("clusterer" | "services" | "drawing")[]) {
    let options = "";
    if (libraries.length > 0) {
        options = `&libraries=${libraries.join(",")}`;
    }
    return new Promise<typeof daum.maps>((resolve, reject) => {
        import('postscribe').then(p => p(document.head, `<script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=${apikey}${options}"></script>`, {
            done() {
				resolve(daum.maps);
			},
			error: reject
        }));
    });
}