---
title: '[춘식이의 코드이야기] 데이터 너드(Nerd)들아!'
author: 춘식
layout: post
permalink: /2014/04/23/14447/
dsq_thread_id:
  - 2879015739
categories:
  - 블로그
  - 춘식이의 코드이야기
tags:
  - ckan
  - council toolkit
  - datapipes
  - frictionless data
  - junar
  - newrelic
  - opennames
  - recline.js
  - 데이터
  - 오픈소스
---
<p style="text-align: right">
  <em>* 글 마지막 [춘식이의 요약 정보]에 도구들의 사용 목적만 간단히 정리한 표를 만들어놓았습니다. </em>
</p>

&nbsp;

코드나무 활동을 하면서 가장 많이 접한 단어를 꼽으라면 &#8216;데이터&#8217;입니다. 공공&#8217;데이터&#8217;, &#8216;데이터&#8217; 저널리즘, 오픈 &#8216;데이터&#8217; 등등(심지어 꿈에도..)

국/내외 사례들을 조사하면서 가장 많이 보게 되는 것도 데이터를 활용하거나 잘 활용하도록 도움을 주는 서비스들입니다.  마찬가지로 이 글을 보고계신 여러분이나 열린 정부를 고민하는 사람들은 물론 &#8216;데이터&#8217;에 대한 고민을 가지고 계시겠죠? 그래서 준비했습니다! **데이터 너드(Nerd)**들을 위한 특집!

<p style="text-align: center">
  <strong><span style="color: #ff0000">* 경고: 데이터 너드가 아닌 지구인들은 글을 읽는 동안 유체이탈 상태에 빠질 수도 있습니다.</span></strong>
</p>

<div style="width: 510px" class="wp-caption aligncenter">
  <img alt="Data Nerd at CultureCode Salon by Christian Payne, on Flickr" src="https://farm8.staticflickr.com/7058/6841384974_1bceee98d5.jpg" width="500" height="281" /><p class="wp-caption-text">
    출처: https://www.flickr.com/photos/christianpayne/6841384974
  </p>
</div>

[춘식이의 코드이야기] 2화에서는 서비스를 운영하면서 데이터를 분석하는 관리자부터 직접 데이터를 생산하고 공개하는 개발자들까지 데이터를 다루는 분들에게 유용한 서비스와 오픈소스 도구들을 소개해드립니다.

&nbsp;

## 오픈소스

&#8211; [CKAN][1]

<div style="width: 510px" class="wp-caption aligncenter">
  <img alt="CKAN Logo: Hi Res Version by Open Knowledge Foundation, on Flickr" src="https://farm7.staticflickr.com/6228/6309624502_b71b3e5459.jpg" width="500" /><p class="wp-caption-text">
    출처: https://www.flickr.com/photos/okfn/6309624502
  </p>
</div>

<a href="http://okfn.org" target="_blank">Open Knowledge Foundation</a>에서 만든 데이터 포털 플랫폼 도구입니다. 오픈소스 프로젝트로 시작하여 현재 CKAN 커뮤니티를 이루고 있습니다.  뒤에 소개해드릴 상용서비스 Junar와 비슷하지만 상용 SaaS(Software as a Service)가 아닌 오픈소스기 때문에 비할바가 못되죠!(저의 무한한 오픈소스 사랑). CKAN은 [국내 공공데이터포털][2]을 포함하여 [미국 공공데이터 포털,][3]  [영국 공공데이터 포털 ][4]등 세계 각국에서 쓰이고 있습니다. CKAN 자체적으로 제공하는 프론트엔드/벡엔드를 사용할 수도 있고 국내 공공데이터 포털처럼 CKAN API만을 가지고 별도의 홈페이지를 구축할 수도 있습니다. <a href="http://wordpress.org" target="_blank">워드프레스</a>나 <a href="https://drupal.org/" target="_blank">드루팔</a> 등 외부 CMS에 통합도 가능하여 활용성이 매우 뛰어나 인기있는 도구입니다.

세부 기능을 조금만 살펴보겠습니다! 웹 인터페이스를 제공해 관리자가 데이터를 등록하거나 업데이트 등의 관리를 쉽게할 수 있으며 데이터 별로 시각화된 자료로도 확인할 수 있습니다. 한 포털 내에 함께 있는 부서 별로  &#8216;Organizations&#8217; 인증 도구를 사용할 수 있습니다. &#8216;Organizations&#8217;는 각각의 데이터셋마다 접근할 수 있는 권한을 별도로 부여하여 자신들이 담당하는 데이터만을 관리할 수 있는 기능입니다. 데이터 검색도 간편합니다. 자칭 구글 스타일이라는 검색 시스템을 도입하여 데이터 검색 기능을 제공합니다. 또 CKAN 이 가진 유용한 특징 중 하나는 &#8220;Federate&#8221; 기능으로 CKAN을 사용하는 별도의 플랫폼(포탈)끼리 데이터를 연결할 수도 있습니다. 주로 서로 다른 부서끼리 관련 데이터를 묶을 때 유용하다고 하네요.

&#8211; [Recline.js][5]  
<img class="aligncenter" alt="Recline.js Logo" src="http://okfnlabs.org/recline/images/logo.png" />

자바스크립트를 공부하는 제가 반한 라이브러리입니다! 순수 자바스크립트와 HTML만으로 강력한 데이터 어플리케이션을 만들 수 있는 도구입니다. 독립적인 라이브러리는 아니고 데이터를 시각화해서 보여줄 수 있는 다른 자바스크립트 라이브러리를 가지고 만들어졌습니다. 구글의 &#8216;퓨전테이블&#8217;보다 훨씬 강력한 데이터 어플리케이션을 만들어보고 싶다! 하는 분들에게 강력히 추천합니다. 자바스크립트를 조금이라도 다뤄보셨던 웹개발자 분들이나 이외의 개발자분들은 튜토리얼만 가지고도 충분히 멋지고 강력한 어플리케이션을 만들 수 있을 것 같습니다.

Recline.js 내부는 Model, Backend, View 총 세 부분으로 나뉘어 구성됩니다. Model은 <a href="http://backbonejs.org" target="_blank">Backbone.js</a>를 사용하며 몇가지 객체와 함수를 제공해 데이터를 원하는 형태로 구조화 할 수 있습니다. Backend는 사용자가 만든 Model과 실제 데이터를 연결시키는 역할을 합니다. 이 때 사용할 데이터는 Google 스프레드시트나 로컬에 있는 CSV 파일 뿐만 아니라 외부 API(CKAN 등)에서 직접 가져올 수 있습니다. View는 Model과 마찬가지로 Backbone.js의 View를 사용합니다.

&#8211; [Frictionless Data][6]

이 프로젝트의 비전은 단순한 오픈소스 도구임을 넘어섭니다. 웹이 사람들의 일상 속 깊숙히 스며들었고 시작할 때 말씀드린 것처럼 이제 어느 분야에서도 데이터를 빼놓고는 이야기하기 힘든 세상입니다. 하지만 여전히 데이터를 가지고 &#8216;요리&#8217;를 하고 싶은 사람들에게는 음식을 &#8216;요리&#8217;하고자 할 때와는 비교할 수 없을만큼 어려움(Friction)이 많습니다. Frictionless Data는 이런 환경을 개선하기 위한 새로운 에코시스템을 만들기 위한 목적으로 탄생한 프로젝트입니다.

<div style="width: 510px" class="wp-caption aligncenter">
  <img alt="Cooking - Ninja Style by Matthias Weinberger, on Flickr" src="https://farm4.staticflickr.com/3167/2597900487_f3911d959e.jpg" width="500" /><p class="wp-caption-text">
    출처: https://www.flickr.com/photos/51035610542@N01/2597900487
  </p>
</div>

프로젝트의 구상도 단순합니다. 이런 에코시스템을 구축하기 위해서는 첫째, 데이터 포맷을 통일시켜야 하며 둘째, 동일한 포맷의 데이터를 쉽게 외부에 공개하고 사용할 수 있는 도구가 필요하고 마지막으로 이런 환경을 이끌어 나갈 커뮤니티가 필요합니다. 우선 데이터 전송을 쉽게 하도록 두가지 표준 규격을 제공합니다. 다양한 데이터 포맷을 한 데 묶을 수 있는 <a href="http://data.okfn.org/doc/data-package" target="_blank">DataPackage</a> 표준을 제공하여 DataPackage에 메타데이터를 담을 수 있습니다. 어떤 데이터도 담을 수 있는 만능 상자같은 셈이죠. 여기에 테이블 형태의 데이터에 딱 맞는 DataPackage, <a href="http://data.okfn.org/doc/tabular-data-package" target="_blank">Simple Data Format</a>을 제공하여 메타데이터와 CSV 형태로 테이블 형태의 데이터를 간편하게 가공하여 공개할 수 있습니다. 마지막으로 직접 여기서 제공하는 도구를 가지고 다양한 형태(Exel, Google Sheet, R, SQL 등)의 원데이터를 이 표준에 맞게 만들어낼 수 있습니다. 홈페이지의 &#8216;Data&#8217; 메뉴를 누르는 순간 확인할 수 있는 엄청난 양의 공식 자료들에 한 번 놀라게 되고, 데이터를 클릭하고 나면 깔끔한 웹 인터페이스와 한 눈에 데이터를 바로 가공해볼 수 있는 기능들에 두 번 놀라게 될 것입니다.

<div style="width: 410px" class="wp-caption aligncenter">
  <img alt="world wide web by Daniela Hartmann, on Flickr" src="https://farm3.staticflickr.com/2748/4053393372_9dc3fc7316.jpg" width="400" /><p class="wp-caption-text">
    출처: https://www.flickr.com/photos/29487767@N02/4053393372
  </p>
</div>

저는 웹이 가진 자유로움과 평등함, 그것이 가진 무한한 가능성을 믿고 지지하고 있습니다. 그리고 이제 웹은 데이터를 빼놓고 이야기할 수 없을 만큼 데이터는 웹의 핵심 중 하나가 되었다고 생각하는데요. 이 프로젝트의 비전처럼 데이터라는 재료를 누구나 쉽게 나누고 구할 수 있고 웹이라는 부엌에서 데이터를 가지고 자유롭게 요리를 할 수 있는 환경은 웹과 데이터가 가져올 혁신의 중요한 모습일 것 같습니다.

&#8211; [Opennames][7]

Opennames는 앞서 설명드린 프로젝트들보다 간단하고 단순한 기능을 제공하지만 오히려 훨씬 더 유용할 수도 있겠다는 생각이 드네요. 엄청난 양의 데이터가 이곳 저곳에 흩뿌려져 있는 경우 같은 데이터가 여기저기 중복되어 있고 숨은 오타들도 많아질 수 있습니다. 심지어 같은 데이터지만 서로 이름이 다른 경우도 있죠(예: 서울 &#8211; 서울특별시). Opennames는 이러한 오류들을 쉽게 잡아낼 수 있는 기능을 제공합니다. <a href="http://github.com" target="_blank">Github</a> 계정만 있으면 쉽게 로그인이 가능하고 웹상에서 바로 사용할 수 있습니다.

&#8211; [Data Pipes][8]

Data Pipes는 아주 간단한 방법으로 테이블형 데이터를 쉽게 변형(행과 열 조작)하고 배포할 수 있게 도와주는 온라인 서비스입니다. 아주 간단합니다!

1.  CSV 파일을 불러온다
2.  Data Pipeline을 생성한다.
3.  아주 간단한 문법의 API를 가지고 데이터를 활용한다.

<p style="text-align: center">
  <em><strong>어때요, 쉽죠?</strong></em>
</p>

<div style="width: 510px" class="wp-caption aligncenter">
  <img alt="Bébé Phoque de Weddell - Baby Weddell Seal.jpg, on Wikipedia" src="http://upload.wikimedia.org/wikipedia/commons/9/9c/B%C3%A9b%C3%A9_Phoque_de_Weddell_-_Baby_Weddell_Seal.jpg" width="500" /><p class="wp-caption-text">
    출처: 위키피디아, Samuel Blanc
  </p>
</div>

&#8211; [Council Toolkit][9]

열린 정부! Civic Hacker! 를 위한 도구입니다. 아! 정정하자면 열린 정부! Civic Hacker! 를 위해 공무원분들이 사용하면 좋은 도구입니다. 이름처럼 의회 홈페이지 제작을 하는데 사용되는 도구입니다. 오직 사용자인 시민들과 &#8216;컨텐츠&#8217;를 최우선으로 하는 목적으로 진행하고있는 프로젝트입니다. 프론트엔드에 쓰이는 템플릿만 개발이 완성된 단계로 자체적인 CMS 도구와 외부 CMS와 통합할 수 있는 기능은 개발 중에 있습니다. 템플릿 디자인의 모델은 <a href="http://gov.uk" target="_blank">영국 의회 홈페이지</a>이라고 하네요(분야는 다르지만 저는 <a href="http://data.gov" target="_blank">미국 공공데이터 포탈</a> 디자인을 좋아합니다).

## 

## 상용 서비스

*오픈소스 도구에 비해 건성건성 정보를 전달해드림을 알려드립니다. 저는 편파적입니다.  
*

&#8211; [New Relic][10]

New Relic은 나이키, 마이크로소프트 등 초대형 기업부터 중소기업이나 개인 개발자까지 사용할 수 있는 데이터 분석 서비스를 SaaS 형태로 제공합니다. 종류별로 총 6가지의 제품(APM, Mobile, Insights, Servers, Browsers, Platform)이 있는데 이름들처럼 모바일, 서버, 브라우저 등 데이터를 수집할 수 있는 거의 모든 플랫폼에 사용할 수 있습니다. 비즈니스를 목적으로 하는 사람들을 대상으로 서비스를 제공하며 어플리케이션 성능 데이터부터 소비자 분석, 빅데이터 분석까지 없는 것 빼고 다 있다(?)고 해도 무방할 것 같네요

&#8211; [Junar][11]

클라우드 기반의 오픈 데이터 플랫폼으로 SaaS 형 서비스를 제공하는 점에서 NewRlic과 비슷하지만 주로 기업, NGO, 정부 기관을 대상으로 하는 점이 다릅니다. 미국 내 주요 도시들과 칠레, 코스타리카 등 주로 정부 기관들이 이 서비스를 사용하고 있습니다.보안 문제부터 공개할 데이터를 정제하는 데까지 데이터를 외부에 공개할 때 생기는 어려운 부분들을 해결해주는 서비스입니다.

* * *

<h4 style="text-align: center">
  <strong>[춘식의 요약 정보]</strong>
</h4>

&nbsp;

<table>
  <tr>
    <th>
      분류
    </th>
    
    <th>
      이름
    </th>
    
    <th>
      목적
    </th>
  </tr>
  
  <tr>
    <td rowspan="6">
      오픈소스
    </td>
    
    <td>
      <a href="http://ckan.org/">CKAN</a>
    </td>
    
    <td>
      오픈 데이터 포탈/플랫폼
    </td>
  </tr>
  
  <tr>
    <td>
      <a href="http://okfnlabs.org/recline/">Recline.js</a>
    </td>
    
    <td>
      데이터 어플리케이션을 만들 수 있는 강력한 자바스크립트 라이브러리
    </td>
  </tr>
  
  <tr>
    <td>
      <a href="http://data.okfn.org/">Frictionless Data</a>
    </td>
    
    <td>
      웹과 데이터의 자유! 새로운 오픈 데이터 에코시스템을 구축하고자 만들어진 프로젝트
    </td>
  </tr>
  
  <tr>
    <td>
      <a href="http://opennames.org/">Opennames</a>
    </td>
    
    <td>
      엄청난 양의 데이터에 숨겨진 오류들을 잡아낼 수 있도록 도와주는 웹서비스
    </td>
  </tr>
  
  <tr>
    <td>
      <a href="http://datapipes.okfnlabs.org/">Data Pipes</a>
    </td>
    
    <td>
      테이블형 데이터를 조작하고 배포하기 위한 온라인 도구
    </td>
  </tr>
  
  <tr>
    <td>
      <a href="http://counciltoolkit.org/">Council Toolkit</a>
    </td>
    
    <td>
      오직 시민을 위한 의회 홈페이지 제작 템플릿
    </td>
  </tr>
  
  <tr>
    <td rowspan="2">
      상용 서비스
    </td>
    
    <td>
      <a href="http://newrelic.com/">New Relic</a>
    </td>
    
    <td>
      웹마스터를 위한, 데이터 너드를 위한. 초대형 기업부터 개인 개발자도 사용하는 데이터 분석 서비스.
    </td>
  </tr>
  
  <tr>
    <td>
      <a href="http://www.junar.com/">Junar</a>
    </td>
    
    <td>
      클라우드 기반의 오픈 데이터 플랫폼
    </td>
  </tr>
</table>

<p style="text-align: center">
  <span style="color: #ff0000"><em><strong>- 오픈소스 만세!</strong></em></span>
</p>

* * *

<p style="text-align: left">
  *<em>여러분들이 알고 계신 데이터 너드들을 위한 도구를 댓글로 소개해주세요!</em>
</p>

 [1]: http://ckan.org/
 [2]: http://data.go.kr
 [3]: http://data.gov
 [4]: http://data.gov.uk
 [5]: http://okfnlabs.org/recline/
 [6]: http://data.okfn.org/
 [7]: http://opennames.org/
 [8]: http://datapipes.okfnlabs.org/
 [9]: http://counciltoolkit.org/
 [10]: https://newrelic.com/
 [11]: http://www.junar.com/