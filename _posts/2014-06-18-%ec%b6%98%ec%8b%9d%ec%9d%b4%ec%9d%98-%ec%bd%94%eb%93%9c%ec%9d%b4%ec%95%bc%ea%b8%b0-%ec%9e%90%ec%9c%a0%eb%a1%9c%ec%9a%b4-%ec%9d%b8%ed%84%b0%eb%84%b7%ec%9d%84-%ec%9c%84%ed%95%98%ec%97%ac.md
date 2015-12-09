---
title: '[춘식이의 코드이야기] 자유로운 인터넷을 위하여'
author: 춘식
layout: post
permalink: /2014/06/18/15752/
dsq_thread_id:
  - 2779786898
categories:
  - 블로그
  - 춘식이의 코드이야기
tags:
  - drm
  - duckduckgo
  - html
  - internet
  - mozilla
  - nsa
  - resetthenet
  - w3c
  - web
---
저는 기술이 보다 나은 사람들의 삶을, 세상을 만들 수 있다고 믿고 있습니다. 특히 인터넷과 웹 기술의 발전에 따라 인류의 삶은 급속도로 발전했습니다. 초기 인터넷과 웹은 단순한 의사소통 수단이자 정보 습득 수단이였다면 최근 기술들은 인류의 생활 양식을 완전히 뒤바꾸고 있습니다. 집단 지성이란 새로운 개념이 생겨나면서 위키피디아가 백과사전을 대체하고 각종 소셜 네트워크 서비스들로 언제든 주변 지인들의 삶을 함께 할 수 있으며 이제는 &#8216;OK, google&#8217; 한 마디면 내가 원하는 정보를 언제든 가져다 주는 시대입니다. 하지만 기술은 목적을 위한 수단일 뿐 그 자체로 선한 기술이란 있을 수 없습니다. 다이너마이트를 개발한 노벨이 평생을 자책감 속에 살았듯이 기술이 선이 될 지 악이 될 지는 사람들의 손에 달려있습니다. 또한 기술 자체적으로도 완벽할 수 없기 때문에 언제나 그 기술을 사용하는 사람들의 의식적인 노력이 필요합니다.

<p style="text-align: center;">
  <a href="https://action.eff.org/o/9042/p/dia/action/public/?action_KEY=9601"><img class="aligncenter" src="https://www.eff.org/files/2013/12/24/nsa-action-1.png" alt="nsa-action" width="176" height="203" /></a><em>CC BY <a href="https://eff.org" target="_blank">eff.org</a></em>
</p>

전 CIA, NSA 직원 애드워드 스노든의 &#8216;프리즘 프로젝트&#8217;의 폭로 사건은 최근 인터넷과 웹 사회를 경악케한 가장 큰 사건입니다. &#8216;프리즘 프로젝트&#8217;는 미국에서 테러를 미연에 방지한다는 목적하에 전 세계를 대상으로 감시/감청을 위한 프로젝트이죠. 뿐만 아니라 세계적으로 인터넷 상의 프라이버시에 관한 논쟁이 활발히 진행 중이며 우리나라에서는 주민등록번호를 포함한 빈번한 개인정보 유출 사건 등도 인터넷과 웹 기술이 가져다 준 잘못된 예로 볼 수 있습니다. 앞서 말했듯이 기술이 선해지기 위해서는 사람들의 의식적인 노력이 필수적입니다. 본격적으로 이번 글에서 소개해드릴 내용은 자유롭고 건강한 인터넷과 웹을 만들기 위한 노력들을 소개합니다.

<h3 style="text-align: center;">
  <strong>모질라, DRM을 제한적으로 수용하다</strong>
</h3>

디지털 권리 관리(Digital rights management, DRM)는 출판자 또는 저작권자가 그들이 배포한 디지털 자료나 하드웨어의 사용을 제어하고 이를 의도한 용도로만 사용하도록 제한하는 데 사용되는 모든 기술들을 지칭하는 용어입니다([위키피디아 참조][1]). DRM 기술이 최근 이슈가 되고 있는 이유는 HTML 웹 표준을 제정하는 W3C(World Wide Web Consortium)에서이 DRM 기술을 다음 스펙에서 표준으로 적용하기로 결정한 데에 있습니다. 기술이 발전하고 다양한 인터페이스가 등장함에 따라 사람들의 콘텐츠 소비가 대부분 웹에서 이루어지면서 콘텐츠 관리자, 특히 헐리우드 배급사들을 포함한 상업적 목적을 가진 기업들은 콘텐츠를 통제하기 위하여 MS 실버라이트 같은 서드파티 플러그인들이 열린 웹을 단절시키고 있다는 판단에 따른 결정이였습니다. 열린 웹을 지향하는 많은 사람들에게 이러한 결정은 큰 충격일 수밖에 없었습니다.

> Some arguments for inclusion take this form: if content protection of some kind has to be used for videos, it is better for it to be discussed in the open at W3C, better for everyone to use an interoperable open standard as much as possible, and better for it to be framed in a browser which can be open source, and available on a general purpose computer rather than a special purpose box. Those are key arguments for the decision that this topic is in scope.

<p style="text-align: center;">
  <a href="http://www.w3.org/blog/2013/10/on-encrypted-video-and-the-open-web/" target="_blank">On Encrypted Video and the Open Web</a> &#8211; Tim Berners-Lee
</p>

열린 엡을 지향하고 DRM 정책에 반대했던 주요 단체 중 하나인 모질라가 그동안 W3C 결정에 반대했던 이유는 크게 두가지 입니다. 하나는 팀버너스리가 직접 밝히듯이 웹의 주인은 사용자로써 모든 선택권은 사용자에게 있어야 하지만 실질적으로 콘텐츠에 대하여 사용자의 선택권이 배제된 기술이기 때문입니다. 현재 브라우저에 DRM을 구현하기 위한 스펙은 <a href="http://www.html5rocks.com/ko/tutorials/eme/basics/" target="_blank">암호화 모듈 확장(Encrypted Media Extensions, EME)와 콘텐츠 복화화 모듈(Content Decryption Module, CDM)</a>입니다. 브라우저는 EME가 제공하는 API를 통해서 CDM과 상호작용하여 사용자에게 선택적으로 암호화된 콘텐츠를 제공하게 됩니다. 모든 브라우저에 설치된 CDM 기술은 어도비에서 제공하고 있는데 이 기술은 EME 구조상의 이유로 소스 코드가 공개되어 있지 않기 때문에 콘텐츠 관리자가 사용자의 정보를 어느 정도까지 수집하고 있는지 전혀 알 수 없으며 사용자의 정보 수집 권한이 전적으로 콘텐츠 관리자에게 있게 된 것이죠. 이에 모질라는 사용자의 보안, 개인 정보 관리와 투명성에 문제를 제기하고 있습니다. 두번째는 열린 웹의 어두운 미래입니다. 모질라는 궁극적으로 DRM이 없는 웹을 지향합니다. 모든 정보는 연결되어 있어야 하고 웹과 웹에 있는 정보는 누구에게나 열려있어야 하는 것이지만 DRM을 지원하는 표준 스펙을 통해 앞으로 만들어질 웹 환경에서는 암호화 된 컨텐츠들이 고립된 환경을 만들고 열린 웹은 결국 단절된 콘텐츠들끼리의 집합이 될 수 있다는 것이죠. <img class="aligncenter" src="http://hacks.mozilla.or.kr/wp-content/uploads/2014/05/mozilla-w3c-eme.png" alt="mozilla cdm" width="300" height="397" />

<p style="text-align: center;">
  <em>CC BY-SA 3.0 <a href="http://hacks.mozilla.or.kr/2014/05/reconciling-mozillas-mission-and-w3c-eme/" target="_blank">Mozilla의 사명과 W3C EME 스펙의 조화</a></em>
</p>

이렇게 DRM 도입을 반대하면서도 결국 모질라는 CDM 기술을 파이어폭스 브라우저에 제한적으로 도입하기로 결정합니다. 대신 모질라가 우려하는 첫번째 이유를 보완하기 위하여 샌드박스라는 기술을 사용합니다. 오픈 소스로 공개된 샌드박스는 CDM과 브라우저 사이에서 인터페이스 역할을 하게 됩니다. CDM의 무차별적인 정보 수집을 막고 보안과 관련된 문제를 일정 부분 해소하기 위하여 샌드박스는 CDM이 필요한 제한된 정보만을 사용자의 기기에서 수집할 수 있도록 제한을 가하는 역할을 합니다. 더 이상 가능할 수 있는 개인 정보 수집을 막고자 하는 노력이죠. 이런 결정을 내리면서 했던 모질라의 고민들은 <a href="http://hacks.mozilla.or.kr/2014/05/reconciling-mozillas-mission-and-w3c-eme/" target="_blank">Mozilla의 사명과 W3C EME 스펙의 조화</a>에서 읽어보실 수 있습니다.

<h3 style="text-align: center;">
  <strong><a href="https://resetthenet.org" target="_blank">Reset the Net</a>, 우리가 바꾸는 인터넷 </strong>
</h3>

서문에 소개한 스노든 폭로 사건으로 인해 시작된 보다 나은 인터넷을 위한 움직임은 세계 곳곳에서 찾아볼 수 있습니다. 그 중 가장 대표적인 캠페인이자 개인적으로도 함께 참여하고 있는 Reset the Net, 인터넷을 다시 구축하자는 캠페인입니다.

<p style="text-align: center;">
  <a href="https://www.resetthenet.org/"><img class="aligncenter" src="https://www.resetthenet.org/images/FacebookCover.png" alt="resetthenet" width="504" height="187" /></a>
</p>

<p style="text-align: left;">
  스노든의 폭로는 저희에게 자유롭고 열린 공간이어야 할 인터넷과 웹이 점차 사용자 감시와 통제의 수단이 되고 있음을 강력하게 경고했습니다. 스노든이 프리즘 프로젝트를 폭로한 지 정확히 1년 째 되는 2014년 6월 5일 정부의 무차별적인 감시를 막기 위해 웹을 사용하는 모든 개인과 기업들의 노력을 촉구하고자 시작하였습니다.
</p>



<p style="text-align: left;">
  인터넷은 정부도 W3C도 기업들도 아닌 우리가 만들어 가고 구축할 수 있는 공간이고 그래야만 합니다. 정부와 정보기관은 의도적으로는 누구든 해킹할 수 있지만 모두를 감시할 수는 없게 만들어야 합니다. 대규모 감시/감청은 당연히도 보안이 취약한 곳들을 침투하면서 이루어지기 때문에 그들이 인터넷과 웹을 빅브라더 세계로 만들지 못하게 우리는 의식적인 노력이 필요합니다. Reset the Net에서 제안하는 계획을 간단하게 소개해드립니다.
</p>

1.  웹사이트를 운영하는 개인이나 사업자는 인증된 보안 기술인 [SSL, HSTS & PFS][2]을 사용합니다.
2.  서버와 연동이 필요한 어플리케이션을 개발하는 개발자는 [SSL & cert pinning][3] 기술을 사용하고 메시징 어플리케이션의 경우 End-to-End 보안 기술을 사용합니다.
3.  인터넷을 사용하는 개인들은 충분한 보안 기술이 적용된 소프트웨어를 사용합니다. Reset the Net에서는 직접 보안 기술이 뛰어난 소프트웨어 몇 가지를 &#8216;<a href="https://pack.resetthenet.org/" target="_blank">Privay Pack</a>&#8216;이란 이름으로 함께 소개하고 있습니다.
4.  개인 웹사이트 및 블로그를 통해 Reset the Net 배너를 등록하거나 SNS로 다른 이들의 동참을 이끌어냅니다.

<p style="text-align: center;">
  <a href="http://codenamu.org/wp-content/uploads/2014/06/cryptocat.png"><img class=" wp-image-15775 aligncenter" src="http://codenamu.org/wp-content/uploads/2014/06/cryptocat.png" alt="cryptocat" width="265" height="227" /></a><em>암호화 메신저 어플리케이션 &#8216;Cryptocat&#8217;</em>
</p>

<p style="text-align: center;">
  <a href="http://codenamu.org/wp-content/uploads/2014/06/resetthenet_chunsik.png"><img class="wp-image-15776  aligncenter" src="http://codenamu.org/wp-content/uploads/2014/06/resetthenet_chunsik.png" alt="resetthenet_chunsik" width="276" height="166" /></a><em>개인 홈페이지에 배너를 등록한 화면</em>
</p>

<h3 style="text-align: center;">
</h3>

<h3 style="text-align: center;">
  <b><a href="http://donttrack.us/" target="_blank">Don&#8217;t track us</a>, <a href="http://dontbubble.us/" target="_blank">Don&#8217;t bubble us</a>. &#8220;Google tracks you, we don&#8217;t&#8221; </b>
</h3>

<p style="text-align: left;">
  사용자를 추적하지 않는 검색엔진 <a href="https://duckduckgo.com/" target="_blank">Duckduckgo</a>입니다. 2008년 Gabriel Weinberg에 의해 Duckduckgo는 기본적으로 사용자의 프라이버시 보호를 목적으로 하고 개인정보에 통한 &#8216;<a href="https://en.wikipedia.org/wiki/Filter_bubble" target="_blank">Filter Bubble</a>&#8216;(구글 검색 결과나 페이스북 뉴스피드처럼 개인화된 결과) 지양합니다. 프라이버시 보호와 &#8216;Filter Bubble&#8217;을 지양하는 문제는 같은 맥락으로 검색 엔진은 사용자의 IP, 검색어, 접속 브라우저 및 기기 정보 등을 전혀 수집하지 않으며 이렇게 수집된 정보를 기반으로 사용자에게 개인화된 검색 결과를 보여주지 않겠다는 의지를 보여줍니다.
</p>

<p style="text-align: center;">
  <a href="//duckduckgo.com"><img class="aligncenter" src="http://i1-news.softpedia-static.com/images/news-700/DuckDuckGo-Hits-3M-Queries-as-PRISM-Scandal-Rages-On.png?1371625292" alt="duckduckgo" width="437" height="224" /></a>
</p>

<p style="text-align: left;">
  그렇다면 어떻게 사용자에게 만족스러운 데이터를 알려줄 수 있을까요? 현재 Duckduckgo 검색 엔진은 Duckduckgo와 협력을 맺고 있는 야후 개발자 네트워크인 <a href="https://boss.yahoo.com/" target="_blank">Yahoo! Search BOSS</a>, <a href="https://wikimediafoundation.org/wiki/Home" target="_blank">위키미디어</a>, <a href="https://en.wikipedia.org/wiki/Bing" target="_blank">Bing</a> 과 자체 웹 크롤러를 사용한 데이터를 기반으로 하면서 동시에 <a href="http://duckduckhack.com/" target="_blank">DuckDuckHack</a> 이라는 사용자 커뮤니티를활용하고 있습니다. 위키피디아같은 집단 지성을 활용하기 위한 커뮤니티 사이트로 사용자가 직접 특정 검색어에 따른 최적의 검색 결과를 제안하고 이 결과를 검색 엔진의 검색 결과에 적용하게 됩니다.
</p>

<div id="attachment_15777" style="width: 440px" class="wp-caption aligncenter">
  <a href="http://codenamu.org/wp-content/uploads/2014/06/places.jpg"><img class=" wp-image-15777  " src="http://codenamu.org/wp-content/uploads/2014/06/places-1024x640.jpg" alt="thai food in san fransisco" width="430" height="269" /></a><p class="wp-caption-text">
    thai food in san francisco
  </p>
</div>

<p style="text-align: left;">
  이와 함께 Duckduckgo 를 <a href="https://github.com/duckduckgo" target="_blank">오픈 소스로 개방</a>함으로써 일반 사용자들로부터 집단지성을 활용한 검색 결과를 만들어낼 뿐만 아니라 전 세계 개발자들이 함께 보다 나은 검색 알고리즘과 검색 결과를 위해 직접 참여하도록 하고 있습니다. 그리고 지역화를 위하여 Transifex 와 비슷한 시스템을 구축하여 각 언어를 사용하는 사용자들이 직접 지역화 프로젝트에 자원활동으로 참여할 수 있도록 돕고 있습니다. 현재(2014년 6월 18일 기준) <a href="https://duck.co/translate/duckduckgo-duckduckgo/ko_KR/landing?only_untranslated=1" target="_blank">한국어 번역은 무려 96%</a>가 완료되어 있네요.
</p>

<p style="text-align: left;">
  개인 정보 활용을 극대화하여 이제는 신이 되어버린 구글과 비교하면 검색 결과의 정확도는 물론 한참 떨어질 수 있습니다. 저도 현재 파이어폭스 브라우저 내에 설치하여 구글과 함께 사용하고 있지만 정작 중요한 데이터는 대부분 구글에 의존하고 있으니까요. 하지만 파이어폭스 브라우저와 파이어폭스 OS를 만드는 모질라가 1위 제품이 아닌 사용자가 선택할 수 있는 대안을 제공하는 것과 마찬가지로 Duckduckgo의 존재와 발전은 무엇보다 중요합니다. 과거 익스플로러에 의해 잠식당한 웹의 암흑기를 떠올려 보세요. 아니면 혹시 구글이 &#8216;Evil&#8217; 이 될 지도 모르구요.
</p>

<h3 style="text-align: center;">
  <strong>자유는 거저 주어지지 않는다. </strong>
</h3>

<p style="text-align: left;">
  이번 코드이야기를 쓰는 내내 얼마 전 씨씨커뮤니티 활동가 분들과 함께 합독회에서 읽었던 <코드 2.0>에서 로렌스 레식 교수가  한결같이 강조하던 말들이 떠올랐습니다. 사이버 공간에서의 자유와 주권에 대하여 사람들의 의식적인 노력과 관심 그리고 참여가 이루어지지 않는다면 사이버 공간은 감시와 통제의 사회가 될 수 밖에 없다는 것입니다. 그 자체로 선한 본성을 가진 기술이란 존재할 수 없습니다. 지금껏 인간의 삶을 편하게 만든 인터넷과 웹의 발전을 지속하기 위하여 그리고 기술이 가진 가치를 잘못된 목적으로 활용되는 것을 막기 위하여 그리고 열린 웹을 위하여 눈을 부릅뜨고! 모두가 지켜보고 노력해야 할 필요가 있습니다.
</p>

 [1]: https://ko.wikipedia.org/wiki/%EB%94%94%EC%A7%80%ED%84%B8_%EA%B6%8C%EB%A6%AC_%EA%B4%80%EB%A6%AC
 [2]: http://resetthenet.tumblr.com/post/84137916350/how-we-secure-the-web-https-hsts-pfs
 [3]: http://resetthenet.tumblr.com/post/84327981750/how-we-secure-our-phones-ssl-cert-pinning-pfs