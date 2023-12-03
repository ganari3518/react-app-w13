import { Component } from "react";
import TOC from "./components/TOC";
import ReadContent from "./components/ReadContent";
import Subject from "./components/Subject";
import Control from "./components/Control";
import CreateContent from "./components/CreateContent";
import UpdateContent from "./components/UpdateContent";

class App extends Component {
  constructor(props) {
    super(props);
    this.max_content_id = 10;
    this.state = {
      mode: "welcome",
      selected_content_id: 0,
      subject: { title: "슈퍼 마리오", sub: "등장 인물" },
      welcome: { title: "소개", desc: "슈퍼 마리오 시리즈의 무대는 가상의 나라 버섯 왕국으로 주로 마리오가 플레이어 캐릭터로서 출연한다. \n마리오의 형제 루이지나 기타 마리오 시리즈의 등장인물들이 동료로서 등장한다. \n마리오 시리즈에 등장하는 캐릭터들은 이른바 마리오 패밀리로 불린다. \n여기에 속하는 캐릭터 중 일부는 각각 독자적인 파생 작품의 주인공 역할을 하기도 한다.", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Mario_Series_Logo.svg/512px-Mario_Series_Logo.svg.png?20180421165633"},
      contents: [
        { id: 1, title: "마리오", desc: "마리오는 닌텐도가 제작한 비디오 게임의 등장인물로, 닌텐도가 제작에 관여한 여러 게임에 등장하고 있다. 닌텐도의 마스코트 겸 캐릭터이다. 일반적으로 마리오가 등장하는 게임에서는 주인공 격으로 등장하는 경우가 많으나, 아주 적게 적 또는 조연급으로도 출연하기도 하였다,하지만 그런적은 거의 없는 편이다. 마리오가 게임에서 최초로 등장한 것은, 1981년에 발표된 아케이드 게임인 《동키콩》이며, 이 작품에서 마리오는 주인공이었으나 당시에는 이름이 없었고, '점프맨'이라는 가명으로 불러졌다. 발군의 운동 능력과 점프력을 살려, 계속되는 장애물을 돌파하며 나서는 히어로의 모습으로 묘사되었다. \n\n1985년 닌텐도가 발매한 패밀리 컴퓨터의 게임 소프트 《슈퍼 마리오브라더스》가 사회적 현상을 불러일으키는 등 대히트를 기록한 것을 계기로, 많은 사람들이 마리오의 모습과 이름을 알게 되었다. 이후 마리오가 주인공 급으로 등장하는 마리오 시리즈 게임들은 전 세계에서 총 1억9천3백만 장 이상 판매되었으며, 역사상 가장 성공적인 비디오 게임으로 꼽힌다. 우리나라에서는 오락실에 마리오게임이 먼저 나왔다. 마리오는 비디오 게임의 역사상 가장 유명한 캐릭터 가운데 하나로 언급되고 있다. 또한 많은 비디오 게임의 바탕이 되기도 했다.", image:"https://i.namu.wiki/i/KO3X1nudT2W4C2nxdkXtUZrBsVHk6YFvgpnOH7lYOD_3RldYgNR6SGDPuE6BJTAmesqi-pql1SAMoAsHQAiMwDuoOdjI8IB1cx6jPJ_wOVAe3AqUG5CkXYJatHNadoR-tTzr0oFZigMcPILsk1pXYg.webp"},
        { id: 2, title: "루이지", desc: "루이지는 마리오 시리즈에 출현하는 캐릭터이다. 마리오보다 더 키가 크지만 덩치에 비해 항상 겁쟁이로 묘사되나(특히 유령(부끄부끄)을 무서워 한다.), 가끔씩 용감하게 행동하는 경우도 더러 있다.키가 마리오보다 크지만, 루이지는 마리오의 동생이다. 요즘 들어 데이지와 사이가 좋은 것으로 알려져 있다. 그는 많은 게임에 출연하지만, 주로 2P 격으로 출연한다. 주연으로 출연하는 작품은 루이지 맨션과 마리오 이스 미싱이다. 2013년엔 루이지가 출연한지 30주년이 되자, 닌텐도에선 '루이지의 해'라고 선포한 뒤, 루이지와 관련된 상품을 많이 냈다. 애니메이션에는 마리지라고 출연했다. 이 영향으로 지금도 루이지를 '마리지'라고 부르는 사람도 있다. \n\n공중으로 도약할 때 마리오와는 달리 발을 바둥거린다." , image:"https://i.namu.wiki/i/MHa5XhbR7JI1PEsCkwj58CMY_xuV0Qh0040jNn_3shLzcfZu8GhLoHORD-Dn4P-C9bDCI2hYIynS44aFkHhh0Lk3-92cWUJbo1u5qlQB2fSR4bhErD7IOhveKdl4MWsrBSCr2OSiURgDH3J443VW9g.webp"},
        { id: 3, title: "피치 공주", desc: "피치 공주는 마리오 시리즈에 등장하는 캐릭터. 《슈퍼 마리오 시리즈》에서는 보통 쿠파에게 잡혀가 마리오가 구하러 모험하는 스토리가 전개된다. 그러나 《마리오 골프 시리즈》, 《마리오 테니스 시리즈》, 《마리오 축구 시리즈》, 《마리오 야구 시리즈》, 《마리오 농구 3대3》, 《마리오 스포츠 믹스》, 《마리오와 소닉 올림픽 시리즈》, 《마리오 카트 시리즈》 등의 마리오 캐릭터가 나오는 스포츠 시리즈, 《마리오 파티 시리즈》, 《슈퍼 스매시브라더스 시리즈》 등 상당수 《마리오 시리즈》 게임들에서 단골로 플레이가 가능한 캐릭터로 등장한다. 《동키콩 (비디오 게임)》에서의 레이디와 《슈퍼 마리오 랜드》에서의 데이지 공주도 납치당했던 것으로 묘사되어있지만 피치공주와는 전혀 다른 캐릭터이다. \n\n피치의 경우는 팬이 많으면서 안티도 제법 있는 히로인이다. 《마리오 시리즈》 팬덤 내에서는 작품 내에서 비중과 공헌, 기여도가 높은 중요한 캐릭터로 평가받고 있다. 피치의 안티들이 다소 극성스러운 성격을 띄기 때문에 피치의 평판이 안 좋아 보일 수 있겠지만 위키피디아 영어판에서의 'Princess Peach(피치 공주)' 문서에서 피치에 관한 비평가들의 평가 사례들을 보면 대다수가 피치에 대해 긍정적으로 평가하고 있다. 안티가 제법 있고 로젤리나에게는 인기에서 약간 밀린다고 해도 피치는 팬이 많으면서 평판도 좋은 히로인이다." , image:"https://i.namu.wiki/i/rnkRzTWEQ1oQAYh_DJhS6Crra9aDWi-a65kEwvzP3TFor2TsZ7RK51DXg0J0owLl-euv1o7wyvP2cHvvNCGkwN6wmZhoSb8ubuXMZ4Y1hR0WY57PFH08NIXc2V0zU3cACyyTJIvcQSkLPF6mEfZpKw.webp"},
        { id: 4, title: "데이지 공주", desc: "데이지 공주는 닌텐도의 마리오 시리즈에 등장하는 인물 중 하나이다. 마리오는 피치공주랑 커플이며, 데이지 공주는 루이지가 좋아하는 사이이다. \n데이지의 데뷔작은 게임보이의 게임 슈퍼 마리오 랜드에 처음 출연하였다. 데이지는 가공의 국가 사라사 랜드의 공주로 등장한다. 평화롭던 사라사 랜드에 우주 침입자 타탕가의 지배를 받게 되고, 데이지가 타탕가에게 납치되는 스토리이다. \n\n데이지의 성격은 밝고 활발한 성격으로, 희로애락이 매우 명확하며, 말괄량이 끼가 있어 간혹 주위를 당혹스럽게 하기도 한다. 꽃을 너무 좋아해 액세서리도 늘 꽃 모양이 있는 것을 한다. \n\n데뷔작 후, 등장하는 대표 게임은 마리오 파티 시리즈. 데이지는 마리오 파티 3부터 마리오 파티 슈퍼스타즈까지 마리오 파티 시리즈에 참여하였으며, 마리오 카트 시리즈의 첫 출연은 마리오 카트:더블 대시!!를 처음으로 출연하여 꾸준히 등장하였다." , image:"https://i.namu.wiki/i/DynEXVtSpPlhwdeIsoEGJY8I4D_jht3Ho8Bm9RRqnSbR5rKb2BN5D5ui62KbV9nbbvTKVlFaGE9ThKml1m2c3-sxGm3CQak5HeW3lI1xBZR0vkhLrLNTxSvhZSbYdz4jbGnXrBzCOl_bd4H-PXSbAg.webp"},
        { id: 5, title: "동키콩", desc: "동키콩은 닌텐도 사의 비디오 게임 등장인물이다. 정글 깊숙한 곳에 살고 있는 커다란 덩치의 고릴라로, 첫 등장은 1981년에 발매된 《동키콩》이다. 1994년부터는 넥타이를 매고 등장한다. 동키콩은 동키콩 시리즈에서 주인공이나 악역으로 다루어졌으며, 미야모토 시게루의 창작이다. 동키콩 주니어 및 동키콩 컨트리 2에서는 인질로 잡혀가기도 했다. 마리오 파티 DS에서는 동키콩이 돌로 변했다. 올림픽 게임에서는 마리오와 소닉 밴쿠버 동계올림픽에서 파워 타입으로 출전하였다. 파트너로는 디디콩, 딕시콩, 타이니콩, 펑키콩이 있고 아기 형태인 베이비동키콩이 있다. 크리터와 킹크리터룰은 동키콩과 같은 곳에서 살고 있다. 마리오카트64부터는 모든마리오카트에 등장했다." , image:"https://i.namu.wiki/i/WPThWR2GwfCbfEEURILOcDvaWprqbQ8dpsb4jc8yJ3f8g_xwHzV1OZ4nhn234l8pkgGVa1p306mR8Heut3tBp0XPx0ElSZ8lm_X0sW3MGJ680f2ag3XMps3BqVZ1CC32oR5UE87Cvq3pXMWZmRagxg.webp"},
        { id: 6, title: "키노피오", desc: "키노피오는 버섯 왕국의 시중으로서 피치 공주를 지키는 역할이다. 하지만 거의 쿠파에게만 당하기만 하고 피치 공주를 거의 지켜 주지 못했다. 때때로 피치 공주에게 구함을 받는 경우도 있다. 버섯 모양의 머리에 작은 체구에 힘이 세며, 점프력은 떨어진다. 여자 키노피오는 키노피코이다. 대체로 색깔은 빨강이나, 파랑, 노랑, 보라, 초록, 시안 등 다른 색깔과 키노피코, 키노영감, 키노피오대장, 키노피치(키노피코의 변형) 등의 다른 종류가 있다. 슈퍼 마리오 오디세이에서는 굼바를 엄청 무서워하며 굼바로 캡쳐해 다가가면 소리를 지르며 무서워한다. \n\n버섯 왕국의 국민들의 대부분은 키노피오들과 헤이호들로 이루어져 있다. 하지만 헤이호와는 차이점이 존재하는데 헤이호는 돈만 주면 아무나 고용할 수 있는 반면 키노피오는 외전을 제외하면 쿠파에게 절대로 협력하지 않는다." , image:"https://i.namu.wiki/i/rjepytPGWTVLUigG7HFvpp_BPbaXOhBLCtX6x6i_DFy_4bDnQ1Uwd2HKAzvD4FN8kRUXTKBXBoJqMah8GGOI8QT28J11JP9GJAwGZSoBnwt0QEL23-X0FWxVaQFzhEQuL-QF7dbkrG85427lr9U-5w.webp"},
        { id: 7, title: "요시", desc: "요시는《마리오 시리즈》에 나오는 동물이다. 또한 요시 종족이 사는 섬은 요스타 섬 혹은 요시 아일랜드라고 불린다. 또한 새끼 요시도 있으며 뉴 슈퍼 마리오 브라더스 U에서 핑크요시, 황금요시, 파랑요시가 있다. \n\n요시의 색깔은 기본적으로 녹색이나, 다른 빛깔의 요시 (빨간색 요시, 파란색 요시, 노란색 요시 등)도 존재하며 그 외에도 다양한 색이 존재한다. 요시의 빛깔 및 작품에 따라 능력에 약간의 차이가 있으며 성별은 수컷 이라고한다. 특기는 알 낳기, 삼키기, 엉덩이 찍기, 불 내뿜기, 공중 버티기 등이 있다." , image:"https://i.namu.wiki/i/SkPlxZ6EWUb6xOtoOYjkxsx6xuXMewXkf2UsaEbhzF-Y2LnWPH8mHQcyQ_BP6fNwtSm6fFjwlN2xmaZdtt_DU4lDDbhfbvpPeJ02MZA4b_jTdXFZ5mH5cxsZaKgyhsnl1qQozvKAMuraDqiwltoZBw.webp"},
        { id: 8, title: "와리오", desc: "와리오는 마리오에 비해 큰 덩치를 한 난폭자 캐릭터이며 마리오에 언제나 적대심을 불태우고 있는 라이벌 캐릭터이다. 돈이라 하면 사족을 못쓰는 수전노 캐릭터이다. 마늘을 좋아한다. 《슈퍼 마리오 랜드 2》에서 악역으로 등장해 몇 년 후, 자신만의 게임을 갖게 된다. 악당 역할을 주로 맡고, 마리오의 라이벌 중 하나이다. 와리오라는 이름은 '나쁘다'는 뜻의 일본어 '와루이'를 마리오와 결합한 단어로, '나쁜 마리오'라는 의미가 된다. 영문 이름 'Wario' 또한 'Mario'에서 M을 거꾸로 뒤집어 W가 된 것으로 마리오와는 정반대라는 의미를 가진다. 그는 《메이드 인 와리오》라는 미니 게임에 등장해 상당한 수익을 얻어 내고 있고 단 것을 매우 좋아한다. 동료인 와루이지가 있다. 많은 사람들이 와루이지를 와리오의 동생이라고 잘못 알고 있지만, 그 둘은 동료일 뿐이다. 고유 액션은 펀치, 메탈 와리오, 자이언트 스윙이 있다." , image:"https://i.namu.wiki/i/gEk2kKCq7sSsEZgWufdvFMjW2JyxZWmQlX1knX2AoGqnZSa9mA2ELivD8qDyW0vWXc2CY8csuOzCLO-odphOIV6y20M7atbAMhVp6JY6xrdhfLNF_rxq-0O-qvJ73XdyqKpn_Dx6SAbTxH67VVfn0w.webp"},
        { id: 9, title: "쿠파", desc: "쿠파는 마리오 시리즈에 등장하는 캐릭터이다. 주로 피치 공주를 납치해 가며, 마리오와는 적대 관계이다. 일부 게임 (마리오 카트, 마리오와 소닉 시리즈 등)에서는 플레이 가능한 캐릭터로 등장한다. 설정상 신장 3m 체중 1200kg이다. \n이름의 유래는 한국어의 국밥으로, 미야모토 시게루는 인터뷰에서 이 악당의 이름을 한국 음식 중 하나로 할 생각이며 ‘국밥·비빔밥·육회’ 중 하나로 정하려고 했다고 밝혔다. 하지만, 미야모토 본인은 불고기를 국밥으로 잘못 알고 있었다고 밝혀, 쿠파의 모티브는 '불고기'였다는 것이 밝혀졌다.\n황소의 머리를 한 거북이의 모습이며 등껍질에는 뿔이 돋아나 있다.\n2013년에는 마리오와 함께 \"역사상 가장 위대한 게임 악당\"으로 기네스 세계 기록에 인정되어 이름을 나란히 하게 되었다." , image:"https://i.namu.wiki/i/-9vrJ55VOGB_8FMgs8_dS8iTnRnxVV2tabqZq0878GVbfS7YUU4pUYnNmaWbhzFiG46nk5I0PCeWX46y0RBebKbPEXP70Bz_7CMbczJFTT1iGQErbqce4aiwVnVJaLEYBmepUVJlnbeBLK2t7sENzg.webp"},
      ],
    };
  }
  getReadContent(){
    var i = 0;
      // contents 배열을 순회하여 선택된 content의 정보를 찾습니다.
      while (i < this.state.contents.length) {
        var data = this.state.contents[i];
        if (data.id === this.state.selected_content_id) {
          return data;
        }
        i = i + 1;
      }
  }

  getContent(){
    var _title,
      _desc,
      _image,
      _article = null;
    // 현재 모드에 따라서 title, desc, image를 결정합니다.
    if (this.state.mode === "welcome") {
      // 모드가 'welcome'일 때
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _image = this.state.welcome.image;
      _article = (<ReadContent title={_title} desc={_desc} img={_image}></ReadContent>)
    } else if (this.state.mode === "read") {
      var _content = this.getReadContent();
      // 모드가 'read'일 때
      _article = (<ReadContent title={_content.title} desc={_content.desc} img={_content.image}></ReadContent>)
    } else if(this.state.mode === "create"){
      _article = (<CreateContent onSubmit={function(_title, _desc){
        this.max_content_id = this.max_content_id + 1;
        var _contents = this.state.contents.concat({
          id: this.max_content_id,
          title: _title,
          desc: _desc,
          image: ""
        });
        this.setState({contents: _contents})
      }.bind(this)}></CreateContent>);
    } else if(this.state.mode === "update"){
      var _content = this.getReadContent();
      _article = (<UpdateContent data={_content} onSubmit={function(_id, _title, _desc){
        var _contents = Array.from(this.state.contents);
        var i = 0;
        while(i < _contents.length){
          if(_contents[i].id === _id){
            _contents[i] = {id: _id, title: _title, desc: _desc};
            break;
          }
          i = i + 1;
        }
        this.setState({contents: _contents});
      }.bind(this)}></UpdateContent>);
    }


    return _article;
  }

  // render 함수는 컴포넌트가 화면에 렌더링될 때 호출됩니다.
  render() {
    // 최종적으로 렌더링될 JSX를 return합니다.
    return (
      <div className="App" style={{whiteSpace:"pre-wrap"}}>
        {/* Subject 컴포넌트는 웹사이트의 제목 부분을 렌더링합니다. */}
        <Subject
          title={this.state.subject.title}
          sub={this.state.subject.sub}
          onChangePage={function () {
            this.setState({ mode: "welcome" }); // 클릭 시 mode를 'welcome'으로 설정합니다.
          }.bind(this)}
        ></Subject>

        <Control onChangeMode={function(_mode){
          if(_mode === "delete"){
            if(window.confirm("really?")){
              var _contents = Array.from(this.state.contents);
              var i = 0;
              while(i < _contents.length){
                if(_contents[i].id === this.state.selected_content_id){
                  _contents.splice(i, 1);
                }
                i = i + 1;
              }
            }
            this.setState({mode: "welcome", contents: _contents});
          } else {
            this.setState({mode : _mode});
          }
        }.bind(this)}></Control>
        
        {/* TOC 컴포넌트는 Table of Contents를 렌더링합니다. */}
        <TOC
          onChangePage={function (id) {
            this.setState({
              mode: "read", // 클릭 시 mode를 'read'로 설정합니다.
              selected_content_id: Number(id), // 선택된 컨텐츠의 id를 설정합니다.
            });
          }.bind(this)}
          data={this.state.contents}
        ></TOC>

        {this.getContent()}
      </div>
    );
  }
}

export default App;