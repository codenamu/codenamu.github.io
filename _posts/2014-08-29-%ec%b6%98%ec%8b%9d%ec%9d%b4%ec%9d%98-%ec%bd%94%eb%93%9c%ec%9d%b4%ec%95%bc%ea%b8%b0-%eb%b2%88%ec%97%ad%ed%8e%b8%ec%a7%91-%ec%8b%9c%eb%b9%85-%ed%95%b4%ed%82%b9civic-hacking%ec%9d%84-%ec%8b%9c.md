---
title: '[춘식이의 코드이야기] [번역&#038;편집] 시빅 해킹(Civic Hacking)을 시작하는 방법'
author: thechunsik
layout: post
permalink: /2014/08/29/15999/
dsq_thread_id:
  - 2968543964
categories:
  - Code for Seoul
  - 블로그
  - 춘식이의 코드이야기
---
<p style="text-align: right;">
  이 글은 코드포아메리카의 테크니컬 담당 Andrew Hyper가 쓴 <a title="How to get started in civic hacking" href="http://opensource.com/government/14/2/how-get-started-civic-hacking">How to get started civic hacking</a>을 번역 및 편집한 글입니다.
</p>

[<img src="https://farm3.staticflickr.com/2879/10855440265_193c5296da.jpg" alt="Molly McLeod" width="100%" />][1] CC BY-NC-ND, 출처: <a href="https://www.flickr.com/photos/89811321@N08/10855440265" target="_blank">https://www.flickr.com/photos/89811321@N08/10855440265</a>

시빅 해킹(Civic Hacking)이란 무엇일까요?

어느 햇살 좋은 날 오클랜드에서는 70여명의 사람들이 도시를 개선하기 위한 자원활동을 위해 모였습니다. 보통 자원봉사의 날에 볼 수 있을 만한 쇠갈퀴나 뜰에 있는 도구들은 없었습니다. 페인트칠 할 도구도, 쓰레기 봉투도, 분리수거할 봉투도 없었습니다. 여기 모인 70여명의 사람들은 각자 노트북을 가지고 도시의 웹사이트를 개선하기 위하여 자원봉사를 하고 있었습니다.

여기 모인 시민들은 &#8216;오클랜드 답변&#8217;이라는 사이트를 구축하고 있었습니다. 이 사이트는 오클랜드 도시 사이트에서 자주 묻는 질문들에 대해 쉽게 답을 찾을 수 있는 서비스입니다. 주차료를 지불하기 위한 방법부터 도시에서 구할 수 있는 직업 목록까지 이 새로운 사이트는 시민 중심의 사이트이자 커뮤니티입니다.

이날 하루 종일 진행된 행사는 &#8216;writeathon&#8217;이라고 합니다. 해커톤과는 다르게 방에 있는 대다수의시민들은 개발자가 아니지만 여러 질문들의 답을 꿰고있는 오랜 오클랜드 거주민들입니다. 기술자들도 물론 참석했지만 서버를 구축하고 사이트를 오픈소스로 공개한 일이 전부입니다. 여기 참석한 웹 개발자들과 답변을 구축한 시민들, 그리고 도시 공무원들은 모두 시빅 해킹이라는 새로운 움직임을 키워가고 있었습니다.

&nbsp;

> *시빅 해킹은 빠르고 창의적으로 정부와 도시 개선에 도움을 주기 위해 함께 노력하는 사람들입니다. &#8211; <a title="Jake Levitas on Code for America" href="http://www.codeforamerica.org/2013/06/07/defining-civic-hacking/" target="_blank">Jake Levitas</a>*

몇 가지 유명한 오픈소스 시빅 해킹 프로젝트들을 소개해드리겠습니다.

*   <a title="OneBusAway" href="http://onebusaway.org/" target="_blank">OneBusAway</a> (<a title="Github" href="https://github.com/OneBusAway/" target="_blank">GitHub</a>)
*   City budget <a title="Open Budget Oakland" href="http://openbudgetoakland.org/" target="_blank">visualizations</a> (<a title="Github" href="https://github.com/daguar/oakland-budget-viz" target="_blank">GitHub</a>)
*   <a title="311 Service Tracker" href="http://servicetracker.cityofchicago.org/" target="_blank">311 Service Tracker</a> (<a title="GitHub" href="https://github.com/codeforamerica/srtracker" target="_blank">GitHub</a>)
*   <a title="Flu Shot Finder" href="http://chicagoflushots.org/" target="_blank">Flu Shot Finder</a> (<a title="GitHub" href="https://github.com/tkompare/chicagoflushots" target="_blank">GitHub</a>)
*   <a title="StreetMix" href="http://streetmix.net/" target="_blank">StreetMix</a> (<a title="GitHub" href="https://github.com/codeforamerica/streetmix" target="_blank">GitHub</a>)
*   <a title="CityVoice" href="http://www.southbendvoices.com/" target="_blank">CityVoice</a> (<a title="GitHub" href="https://github.com/codeforamerica/cityvoice" target="_blank">GitHub</a>)

### - 오픈 소스 시빅 해킹

시빅 해킹은 오픈 소스를 근간으로 하고 있습니다. 열정 넘치는 자원활동가들은 코드를 짜고 그와 이웃들의 삶을 개선할 수 있는 서비스를 만들지만 전 세계 다른 지역에서도 비슷한 문제를 비슷한 방법으로 해결할 수 있도록 오픈 소스로 공개하는 것입니다. 어떠한 제약없이 코드를 쉽게 공유할 수 있는 것은 시민들의 시빅 해킹이 더욱 더 커질 수 있도록 만드는 방법입니다.

예를 들어, 몇 년 전 보스턴에서는 반복된 폭설로 인해 소화전이 모두 묻혀버리는 재난사고가 있었습니다. 이 폭설은 전선을 무너뜨려 화재사고도 많이 일으켰습니다. 몇 시빅 해커들은 이 문제를 본 뒤 <a title="Adopt-a-hydrant" href="http://adoptahydrant.org/" target="_blank">Adopt-a-hydrant</a> (<a title="GitHub" href="https://github.com/codeforamerica/adopt-a-hydrant" target="_blank">GitHub</a>)를 개발하게 되었습니다. 이 서비스는 이웃들이 자원하여 집 앞의 소화전을 깨끗이 치울 수 있도록 도와주는 서비스입니다. 다음 해 여름, 같은 소스 코드는 호놀룰루에서 재사용되어 폭설이 아닌 쓰나미 경보기에 쓰였습니다. &#8216;Adopt-a-Hydrant&#8217;는 수십번 재사용되었고 전 세계 개발자들이 꾸준히 개선시켜나가고 있습니다.

&nbsp;

### - 시작하기

<span style="letter-spacing: 0px;">처음 시작하기 좋은 프로젝트는 여러분이 살고 있는 도시에 이미 존재하는 서비스입니다. 예를 들어 <a title="Click that 'hood" href="http://click-that-hood.com/" target="_blank">Click that &#8216;hood</a> (<a title="GitHub" href="https://github.com/codeforamerica/click_that_hood" target="_blank">GitHub</a>)를 보세요. 여러분이 살고 있는 지역에 대해 쉽게 가르쳐주는 단순하지만 재밌는 게임입니다. 이 게임이 훌륭한 점은 여러분의 도시를 쉽게 게임에 추가할 수 있는 <a title="instructions page" href="https://github.com/codeforamerica/click_that_hood/wiki/How-to-add-a-city-to-Click-That-%E2%80%99Hood" target="_blank">명료한 문서</a>입니다. 이 문서는 오픈소스 활용하기, 깃헙에서 협업하기, 오픈 데이터 찾기 등 시빅 해킹을 시작하기 위해 필요한 모든 것들을 담고 있습니다.<br /> </span>

> *개발자가 아니여도 누구나 우리 지역을 위해 참여할 수 있는 프로젝트는 무엇이 있을까? **춘식이가 알려드리는 추천 프로젝트!***
> 
> ### *[로컬위키 프로젝트][2]*
> 
> 로컬위키 제목 그대로 자기가 살고 있는 지역을 위키 정보로 쌓아 올리는 프로젝트입니다. 로컬위키라는 서비스로 운영되고 있으며 전 세계 누구나 자기가 살고있는 지역을 기준으로 자기가 알고있는 소소한 정보들을 올릴 수 있습니다. 그래서 지난 주 제가 직접 서울을 키워드로 [로컬위키 서울][3] 페이지를 새로 만들어보았습니다.* 로컬위키에 정보를 입력하는 방법은 간단합니다. 로컬위키는 &#8220;http://localwiki.net/&#8221; 주소 뒤에 새로운 키워드가 붙으면 기본적으로 이미 존재하는 페이지인지 아닌지 확인 후 새로운 페이지를 만들지를 물어봅니다. 그럼 언제든지 우리가 원하는 새로운 정보를 입력할 수 있고 새로운 페이지를 구성할 수 있죠. 제가 직접 서울에 존재하는 코워킹스페이스 &#8211; 디캠프와 청년허브 &#8211; 를 입력해보았습니다. 여러분도 여러분이 알고 계시는 정보를 바로 입력해보세요!*
> 
> 1.  <a href="http://localwiki.net/Users/_register/?next=localwiki.net/" target="_blank"><em>로컬위키 회원가입</em></a>
> 2.  *&#8216;<a href="http://localwiki.net/_region/_add" target="_blank">Add Region</a>&#8216; 버튼을 눌러서 로컬위키 서울 페이지(&#8220;<a href="http://localwiki.net/seoul" target="_blank">http://localwiki.net/seoul</a>&#8220;)를 새로 만든다.*[<img class="aligncenter size-full wp-image-16004" src="http://codenamu.org/wp-content/uploads/2014/08/Screen-Shot-2014-08-28-at-5.48.06-PM.png" alt="localwiki_seoul" width="100%" />][4]
> 3.  *올리고싶은 정보가 속한 카테고리와 카테고리 링크(&#8220;<a href="http://localwiki.net/seoul/coworkingspace" target="_blank">http://localwiki.net/seoul/coworkingspace</a>&#8220;)를 첫 페이지에 추가[<img class="aligncenter size-full wp-image-16001" src="http://codenamu.org/wp-content/uploads/2014/08/Screen-Shot-2014-08-28-at-5.33.06-PM.png" alt="localwiki_coworkingspace" width="100%" />][5]*
> 4.  *동일한 방법으로 올리고 싶은 정보를 카테고리 페이지(&#8220;<a href="http://localwiki.net/seoul/coworkingspace" target="_blank">http://localwiki.net/seoul/coworkingspace</a>&#8220;)에 추가**[<img class="aligncenter size-full wp-image-16002" src="http://codenamu.org/wp-content/uploads/2014/08/Screen-Shot-2014-08-28-at-5.35.57-PM.png" alt="localwiki_coworkingspace_2" width="100%" />][6]*
> 5.  *올리고 싶은 정보를 설명할 수 있는 페이지 추가(&#8220;<a href="http://localwiki.net/seoul/coworkingspace/dcamp.kr" target="_blank">http://localwiki.net/seoul/coworkingspace/dcamp.kr</a>&#8220;)** [<img class="aligncenter size-full wp-image-16003" src="http://codenamu.org/wp-content/uploads/2014/08/Screen-Shot-2014-08-28-at-5.39.06-PM.png" alt="localwiki_dcamp" width="100%" />][7]*
> 6.  *영어를 너무 잘하는데 시빅 해킹은 영어가 필요하지 않냐구요!? 물론 필요하죠! 로컬위키를 포함한 해외의 많은 좋은 서비스들이 주로 영어로 만들어져있기 때문에 우리나라 사람들을 위한 번역 프로젝트도 왕성합니다. 로컬위키 역시 아쉽게도 아직 한국어 번역이 완성되지 않아 영어로만 서비스를 이용할 수 있습니다. <a href="https://www.transifex.com/projects/p/localwiki/" target="_blank">영어를 잘하시는 시빅해커 분들, 출동!</a>*

### - 오픈데이터 찾기

시빅 해킹 움직임은 정부의 공공데이터를 쉽게 찾을 수 있는 것이 중요합니다. 버스 시간표나 열차 역 정보 등 교통데이터 등이 공개되어 있지 않다면 우리가 일상 생활에서도 자주 사용하는 대중교통 웹/앱 서비스등을 만들지 못했을 것입니다. 운이 좋게도, 많은 도시에서 이런 오픈 데이터의 중요성을 인식하고 데이터 포털을 통해 데이터를 공개하고 있습니다. [공공데이터포탈][8] 및 각 도시별 데이터 포털에서 수많은 공공데이터를 찾아보실 수 있습니다. 이 포탈을 통해서 정부 공공 기관 및 도시가 가진 모든 이용 가능한 데이터를 포탈에 모아 온라인 한 곳에 사람들이 사용할 수 있도록 모아두는 것이죠. 가장 최고의 데이터 포탈은 기기가 인식할 수 있는 형태로 공개된 데이터를 가지고 있는 곳이며 이런 데이터들은 어플리케이션에 쉽게 활용될 수 있습니다. 여러분이 살고 있는 도시의 홈페이지에서 공공데이터 포탈을 지원하고 있는지 확인해보세요. 아직 없다면 도시의 데이터포탈을 구축하는 프로젝트가 여러분의 멋진 첫 시빅 해킹 프로젝트가 될 수도 있습니다!

오픈 소스로 공개된 데이터 포탈 목록:

*   <a title="CKAN" href="http://ckan.org/" target="_blank">CKAN</a>
*   <a title="DKAN" href="https://drupal.org/project/dkan" target="_blank">DKAN</a>
*   <a title="Socrata" href="http://open-source.socrata.com/" target="_blank">Socrata</a>

[<img class="wp-image-16006 size-full" src="http://codenamu.org/wp-content/uploads/2014/08/14504086826_0512c2ff20_k.jpg" alt="codeforseoul_banner" width="100%" />][9] CC BY, 출처: <a href="https://www.flickr.com/photos/wowcckorea/14504086826/" target="_blank">https://www.flickr.com/photos/wowcckorea/14504086826/</a>

### - 커뮤니티

시빅 해킹은 지역 사회와 기술을 함께 포괄하고 있는 개념임을 아는 것은 중요합니다. 모든 시빅 해커들은 함께 지역 사회의 문제를 해결하기 위해 서로의 도움이 필요합니다. 코드포아메리카 <a title="CfA Brigasdes" href="http://brigade.codeforamerica.org/" target="_blank">브리게이드</a> 페이지에서 여러분이 살고 있는 지역의 자원활동가 그룹을 찾아보세요. &#8211; *현재 대한민국에서는 코드포서울이 유일한 자원활동가 그룹으로 해외 단체들과 협력을 함께하고 있습니다* &#8211; 다른 시빅 해킹 그룹에 참여할 수 있는 가장 최고의 방법은 그들이 어떻게 도시를 개선시켜왔는지 아는 것입니다. 브리게이드에 참여하는 것이 바로 시빅 해킹 오픈 소스 도구와 프로젝트들을 찾아볼 수 있는 가장 최고의 방법 중 하나입니다. 브리게이드에서 자원활동을 하고 있는 도시 공무원 및 시빅 해커들과 함께 프로젝트에 참여하여 만든 어플리케이션은 실제로 사회에 존재하는 현실적인 문제들을 해결할 수 있습니다. 많은 다양한 기술들과 다양한 관점들은 많은 다양한 사람들에게 영향을 미치는 문제들을 해결할 수 있습니다.

<a href="http://creativecommons.org/licenses/by-sa/3.0/" rel="license"><br /> </a>[<img class="size-full wp-image-16008 alignright" src="http://codenamu.org/wp-content/uploads/2014/08/1000px-cc-by-sa_icon-svg.png" alt="cc-by-sa" width="100" />][10]<a href="http://creativecommons.org/licenses/by-sa/3.0/" rel="license"><br /> </a>

 [1]: https://www.flickr.com/photos/tedxshelburnefalls/10855440265 "Molly McLeod by TEDxShelburneFalls, on Flickr"
 [2]: http://localwiki.net "Localwiki"
 [3]: http://localwiki.net/seoul/ "로컬위키 서울"
 [4]: http://codenamu.org/wp-content/uploads/2014/08/Screen-Shot-2014-08-28-at-5.48.06-PM.png
 [5]: http://codenamu.org/wp-content/uploads/2014/08/Screen-Shot-2014-08-28-at-5.33.06-PM.png
 [6]: http://codenamu.org/wp-content/uploads/2014/08/Screen-Shot-2014-08-28-at-5.35.57-PM.png
 [7]: http://codenamu.org/wp-content/uploads/2014/08/Screen-Shot-2014-08-28-at-5.39.06-PM.png
 [8]: http://data.go.kr "공공데이터포탈"
 [9]: http://codenamu.org/wp-content/uploads/2014/08/14504086826_0512c2ff20_k.jpg
 [10]: http://codenamu.org/wp-content/uploads/2014/08/1000px-cc-by-sa_icon-svg.png