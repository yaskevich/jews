requirejs.config({
    'baseUrl': 'lib',
    'paths': {
        'leaflet.wms': '../dist/leaflet.wms' //.js'
    }
});

define(['leaflet', 'leaflet.wms'],
function(L, wms) {

var overlayMap = createMap('overlay-map', false);
// var tiledMap = createMap('tiled-map', true);

var places = [ {"id":1,"place_ru":"Маркова-Слобода","lat":55.1646,"lon":30.1131} , {"id":2,"place_ru":"Прудок","lat":55.7826,"lon":30.17236} , {"id":3,"place_ru":"Староселье","lat":55.1545,"lon":29.2079} , {"id":4,"place_ru":"Ковалево","lat":55.1502,"lon":28.6132} , {"id":5,"place_ru":"Сухой Бор","lat":55.6365248941579,"lon":28.8364961038732} , {"id":6,"place_ru":"Венок","lat":55.4592,"lon":28.7032} , {"id":7,"place_ru":"Пестковатка","lat":55.4898,"lon":28.7159} , {"id":8,"place_ru":"Бубны","lat":55.84644,"lon":29.191639} , {"id":9,"place_ru":"Шулятино","lat":55.822225,"lon":29.198287} , {"id":10,"place_ru":"Владимирово","lat":55.8501,"lon":29.227967} , {"id":11,"place_ru":"Рукавец","lat":0,"lon":0} , {"id":12,"place_ru":"Доманово 2-е","lat":53.0352,"lon":29.2583} , {"id":13,"place_ru":"Ковчицы-2","lat":52.834680856596,"lon":29.1846310849995} , {"id":14,"place_ru":"Козловичи","lat":52.9090699003354,"lon":28.9383959384531} , {"id":15,"place_ru":"Озаричи","lat":52.4621751504799,"lon":29.2614358426628} , {"id":16,"place_ru":"Воротынь","lat":52.9930726886153,"lon":29.6482827528704} , {"id":17,"place_ru":"Передовая","lat":53.0310059390448,"lon":29.7157512048392} , {"id":18,"place_ru":"Дроздино","lat":54.1635021526426,"lon":28.7470639211666} , {"id":19,"place_ru":"Корма","lat":54.1700776729044,"lon":28.8477631451626} , {"id":20,"place_ru":"Липа","lat":54.1118,"lon":28.9767} , {"id":21,"place_ru":"Старая Метча","lat":54.1829093146585,"lon":28.721501264254} , {"id":22,"place_ru":"Селище","lat":54.198812559416,"lon":28.7848537076198} , {"id":23,"place_ru":"Зоричи","lat":54.2082212978123,"lon":28.889187073546} , {"id":24,"place_ru":"Унтальянка","lat":54.1811686333803,"lon":28.8193477190704} , {"id":25,"place_ru":"Гайна","lat":54.2438,"lon":27.7099} , {"id":26,"place_ru":"Гурба","lat":54.624378,"lon":28.497531} , {"id":27,"place_ru":"Стайчевка","lat":54.6846,"lon":28.5913} , {"id":28,"place_ru":"Шамки","lat":54.5538405277578,"lon":28.9001} , {"id":29,"place_ru":"Михаловщина","lat":54.9002,"lon":27.9258} , {"id":30,"place_ru":"Мирославка","lat":53.6490132700241,"lon":28.9548164863369} , {"id":31,"place_ru":"Кличев","lat":53.485,"lon":29.3451} , {"id":32,"place_ru":"Высокая Старина","lat":53.5140053703813,"lon":28.5159196793583} , {"id":33,"place_ru":"Березино","lat":53.8369092023456,"lon":28.9967} , {"id":34,"place_ru":"Глухой Ток","lat":53.8123098282856,"lon":28.9515569355422} , {"id":35,"place_ru":"Дзержинск","lat":53.6884658149923,"lon":27.1372243789672} , {"id":36,"place_ru":"Лесковка","lat":53.9655627270973,"lon":26.9464158624784} , {"id":37,"place_ru":"Заречье","lat":53.8314,"lon":27.6729} , {"id":38,"place_ru":"Заямочно","lat":53.8409,"lon":27.8349} , {"id":39,"place_ru":"Редька","lat":52.0683720328194,"lon":29.1401264844801} , {"id":40,"place_ru":"Черемошня","lat":52.0031,"lon":29.0675} , {"id":41,"place_ru":"Вселюб","lat":53.7211970046975,"lon":25.8001876823813} , {"id":42,"place_ru":"Воронча","lat":53.4172288228347,"lon":26.061535017689} , {"id":43,"place_ru":"Рукавчицы","lat":53.4247984797998,"lon":26.1709615811417} , {"id":44,"place_ru":"Полторановичи","lat":52.2070009591261,"lon":25.9594025249124} , {"id":45,"place_ru":"Степановка","lat":52.2480720659122,"lon":30.449964335092} , {"id":46,"place_ru":"Красная Слобода","lat":52.8537526789406,"lon":27.1752898774583} , {"id":47,"place_ru":"Ляховичи","lat":53.0375,"lon":26.2639} , {"id":48,"place_ru":"Белыничи","lat":53.9939304507036,"lon":29.7076148602578} , {"id":49,"place_ru":"Буйничи","lat":53.8532709514519,"lon":30.2648828790885} , {"id":50,"place_ru":"Завережье","lat":53.8255962306055,"lon":30.0449918485286} , {"id":51,"place_ru":"Тишовка","lat":53.8913888851621,"lon":30.249722262627} , {"id":52,"place_ru":"Тишовки 3-и","lat":53.8786,"lon":30.2312} , {"id":53,"place_ru":"Селец","lat":53.8292139909427,"lon":30.2446414417831} , {"id":54,"place_ru":"Круглое","lat":54.2439,"lon":29.7991} , {"id":55,"place_ru":"Головчин","lat":54.0588714400177,"lon":29.9197900536703} , {"id":56,"place_ru":"Горожоны","lat":54.2787926672923,"lon":29.4136947278537} , {"id":57,"place_ru":"Опенковичи","lat":54.282,"lon":29.3346} , {"id":58,"place_ru":"Славное","lat":54.3041443006543,"lon":29.4478112422979} , {"id":59,"place_ru":"Половин Лог","lat":53.9164,"lon":30.4158} , {"id":60,"place_ru":"Сапежинка","lat":53.5429087354444,"lon":30.2403298912085} , {"id":61,"place_ru":"Вьюн","lat":53.4601,"lon":30.0366} , {"id":62,"place_ru":"Гомель","lat":52.4242,"lon":31.0137} , {"id":63,"place_ru":"Баево","lat":54.486749107929,"lon":31.112521558467} , {"id":64,"place_ru":"Напрасновка","lat":54.3193664224803,"lon":30.6055342809318} , {"id":65,"place_ru":"Ленино","lat":54.4069639363792,"lon":31.1246109760432} , {"id":66,"place_ru":"Орловка","lat":53.5481,"lon":32.495} , {"id":67,"place_ru":"Подлесная","lat":53.5085037659198,"lon":32.5023291378911} , {"id":68,"place_ru":"Мошевое","lat":53.1334662040764,"lon":32.0354992603088} , {"id":69,"place_ru":"Шамово","lat":54.1898593335218,"lon":31.3561464879483} , {"id":70,"place_ru":"Нестерово","lat":54.1839,"lon":31.3805} , {"id":71,"place_ru":"Обольцы","lat":54.5952380218498,"lon":29.8251228793247} , {"id":72,"place_ru":"Смольяны","lat":54.5966633354518,"lon":30.0687341286643} , {"id":73,"place_ru":"Грицево","lat":54.4039,"lon":30.1157} , {"id":74,"place_ru":"Лиозно","lat":55.0254,"lon":30.7972} , {"id":75,"place_ru":"Раскидыши","lat":54.3053,"lon":30.012} , {"id":76,"place_ru":"Жлобин","lat":52.8968,"lon":30.0577} , {"id":77,"place_ru":"Феликсполье","lat":53.3561,"lon":29.8114} , {"id":78,"place_ru":"Понизовка","lat":54.3687,"lon":29.5802} , {"id":79,"place_ru":"Горы","lat":54.2665066281196,"lon":31.2054274149986} , {"id":80,"place_ru":"Рясно","lat":54.0094048765619,"lon":31.1944908185291} , {"id":81,"place_ru":"Затоны-1","lat":54.0066638038365,"lon":31.0919564582124} , {"id":82,"place_ru":"Дрануха","lat":53.7760642589901,"lon":31.0429554167562} , {"id":83,"place_ru":"Святозерье","lat":53.7664,"lon":31.1505} , {"id":84,"place_ru":"Ялова","lat":53.8173,"lon":30.9724} , {"id":85,"place_ru":"Черневка","lat":54.0875406051189,"lon":30.7705308555286} , {"id":86,"place_ru":"Антоновка","lat":53.8481,"lon":31.5263} , {"id":87,"place_ru":"Быхов","lat":53.5114330841665,"lon":30.2332415423662} , {"id":88,"place_ru":"Копысь","lat":54.319887483539,"lon":30.2901869511897} , {"id":89,"place_ru":"Могилев","lat":53.8946,"lon":30.3232} , {"id":90,"place_ru":"Мстиславль","lat":54.0228,"lon":31.7348} , {"id":91,"place_ru":"Бабиновичи","lat":54.833375049172,"lon":30.5796258346432} , {"id":92,"place_ru":"Орша","lat":54.509,"lon":30.4261} , {"id":93,"place_ru":"Рогачев","lat":53.0678,"lon":30.0459} , {"id":94,"place_ru":"Сенно","lat":54.8084152324639,"lon":29.7127395884553} , {"id":95,"place_ru":"Чаусы","lat":53.8041,"lon":30.9746} , {"id":96,"place_ru":"Чериков","lat":53.5664,"lon":31.3851}  ].forEach(logArrayElements);

function logArrayElements(element, index, array) {
  // console.log('a[' + index + '] = ' + element);
  // console.log(element['place_ru'], element['lat']);
  if (element['lat']) {
	  var m = L.marker([element['lat'], element['lon']]).addTo(overlayMap);
	  m.bindPopup("<b>" + element['place_ru'] +"</b>");
  }
}


// var circle = L.circle([53.905, 27.6049], {
    // color: 'red',
    // fillColor: '#f03',
    // fillOpacity: 0.5,
    // radius: 15000
// }).addTo(overlayMap);
// circle.bindTooltip("<b>МИНСК</b>", {permanent: true, className: "my-label", offset: [0, 0] });



function createMap(div, tiled) {
    // Map configuration
    var map = L.map(div);
    map.setView([54, 29], 6);

    var basemaps = {
        'Basemap': basemap().addTo(map),
        'Blank': blank()
    };
	
    // Add WMS source/layers
    var source = wms.source(
        "http://hgl.harvard.edu:8090/geoserver/wms",
		
        // "http://pelham.lib.harvard.edu:8090/geoserver/wms",
        {
            "format": "image/png",
            "transparent": "true",
            "attribution": "<a href='http://ows.terrestris.de/'>terrestris</a>",
            // "info_format": "text/html",
            "tiled": true
        }        
    );

    var layers = {
        
        // 'OSM Overlay': source.getLayer("cite:SDE2.G3201_S12_1885_B7").addTo(map)
        'Old map overlay': source.getLayer("cite:G3201_S12_1885_B7").addTo(map)
    };

    // Create layer control
    L.control.layers(basemaps, layers).addTo(map);

    // Opacity slider
    var slider = L.DomUtil.get('range-' + div);
    L.DomEvent.addListener(slider, 'change', function() {
        source.setOpacity(this.value);
    });
    return map;
}

function basemap() {
    // maps.stamen.com
    var attr = '<a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://www.openstreetmap.org/copyright">ODbL</a>.';
    return L.tileLayer(
	//"http://tile.stamen.com/toner-background/{z}/{x}/{y}.png"	
	"http://{s}.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png"
	, {
        opacity: 1,
        attribution: attr
    });
}

function blank() {
    var layer = new L.Layer();
    layer.onAdd = layer.onRemove = function() {};
    return layer;
}

// Export maps for console experimentation
return {
    'maps': {
        'overlay': overlayMap,
        // 'tiled': tiledMap
    }
};

});

