---
layout: post
status: publish
published: true
title: "[춘식이의 코드이야기] 정부가 만든 인기있는 7가지 오픈소스"
author:
  display_name: thechunsik
  login: thechunsik
  email: thechunsik@gmail.com
  url: http://chunsik.org
author_login: thechunsik
author_email: thechunsik@gmail.com
author_url: http://chunsik.org
wordpress_id: 16392
wordpress_url: http://codenamu.org/?p=16392
date: '2014-11-28 10:17:40 +0900'
date_gmt: '2014-11-28 01:17:40 +0900'
categories:
- "blog"
- "codestory"
tags: []
comments: []
---
<p><em>* 이 글은 <a href="http://www.bloter.net" title="Bloter.net" target="_blank">블로터닷넷</a>에 <a href="http://www.bloter.net/archives/214057" title="Bloter.net" target="_blank">정부가 만드는 인기 오픈소스 프로젝트 7가지</a>라는 제목으로 함께 실렸습니다.</em></p>
<p>얼마 전 미국에서 재미난 이름, <a href="https://18f.gsa.gov/" target="_blank">18층</a>,의 오픈소스 팀이 정부에 새로 생겼다는 <a href="http://www.techrepublic.com/article/as-open-source-goes-mainstream-institutions-collaborate-differently/" target="_blank">소식</a>을 들었다. 살펴보니 이름이 재미있을 뿐 하는 일과 목표가 감동적일만큼 멋지다.<br />
<a href="http://codenamu.org/wp-content/uploads/2014/11/18fenergy-olympus-supercomputer.jpg"><img class="aligncenter size-full wp-image-214034" src="http://www.bloter.net/wp-content/uploads/2014/11/18fenergy-olympus-supercomputer.jpg" alt="18fenergy-olympus-supercomputer" width="620" height="349" /></a></p>
<p style="text-align: center">IMAGE - 18F</p>
<blockquote><p>"18층에서 오픈소스를 적용한다는 것은 국민들이 자유롭게 '연방 선거 관리 위원회(Federal Election Commission)' 데이터를 자유롭게 볼 수 있다는 것이며 동시에 오픈 소스 정책을 열람할 수 있고 '정보의 자유법(Freedom of Information Act)'에 대한 요구가 어떻게 진행되고 있는지 쉽게 확인할 수 있다는 것이다..... 단순히 정부의 웹사이트, 정책과 소프트웨어 제작 과정이 오픈소스로 이루어진 다는 것, 그 이상의 훨씬 더 중요한 문제이다."</p></blockquote>
<p>이제 오픈소스는 해커들이나 일반 사기업, 자유로운 개발자들만의 이야기가 아니다. 디지털 사회를 향한 모든 서비스에서 오픈소스는 빼놓을 수 없는 도구이자 방법, 정책이 되었다. 특히 정부가 만들고 운영하는 오픈소스는 위의 문장처럼 단순히 사기업이 오픈소스를 공개하는 것보다 더 중요한 의미를 담고 있다. 국민들의 재산으로 만든 서비스를 국민들에게 돌려준다는 것. 그리고 모든 것이 열려져 있어 국민이면 누구나 쉽게 접근할 수 있다는 것이 바로 중요한 의미 중 하나이다.</p>
<p>아쉽게도 우리나라에서는 아직 정부 기관에 운영하거나 개발한 오픈소스 프로젝트 사례가 없다. 이번 코드이야기에서는 해외 정부나 정부 기관이 만들거나 운영하는 오픈소스 프로젝트 중 인기있는 것을 골라서 소개해볼까한다. 과연 어떤 프로젝트들이 만들어졌고 인기를 얻는지 살펴보면서 정부가 만드는 오픈소스는 개발자들이 아닌 국민들에게 어떤 중요한 의미를 갖는지 생각해볼 수 있는 기회가 될 것이다.</p>
<table>
<thead>
<tr>
<th style="text-align: center">이름</th>
<th style="text-align: center">부서(국가)</th>
<th style="text-align: center">좋아요수(Stared)</th>
<th style="text-align: center">개발 언어</th>
</tr>
</thead>
<tbody>
<tr>
<td rowspan="2"><a title="API Umbrella" href="https://github.com/NREL/api-umbrella" target="_blank">API Umbrella</a></td>
<td style="text-align: center"><a title="NREL" href="http://www.nrel.gov/" target="_blank">국립 재생 에너지 연구소</a>(미국)</td>
<td style="text-align: center">178</td>
<td style="text-align: center">Ruby</td>
</tr>
<tr>
<td colspan="4">API를 구축하고 API를 활용하는데 더욱 쉽게 접근하기 위해서 만들어진 API 관리 플랫폼 프로젝트이다.<br />
접근 제어, 분석 등 API를 구축하기 위해 필요한 기본 기능들을 잘 구현해두어 구축자 입장에서는 API를 만드는 것에 집중할 수 있도록 돕는다. 또한 API를 추 및 확장하는 절차가 간편하다.<br />
API 사용자 입장에서는 다른 언어나 다른 서버에서 구축된 API를 사용자 입장에서는 단일 엔드포인트로 접근할 수 있게 돕는다. 사용자를 위한 문서화도 잘 되어있으며 단일 API 키를 가지고 모든 API에 접근할 수 있다.<br />
무엇보다 가장 큰 특징은 <b>국립 재생 에너지 연구소에서 만들었다는 것 아닐까?</b></td>
</tr>
<tr>
<td rowspan="2"><a title="Whitehall" href="https://github.com/alphagov/whitehall" target="_blank">Whitehall</a></td>
<td style="text-align: center"><a title="영국 정부 홈페이지" href="http://gov.uk" target="_blank">중앙 정부</a>(영국)</td>
<td style="text-align: center">226</td>
<td style="text-align: center">Ruby</td>
</tr>
<tr>
<td colspan="4">‘Whitehall’은 Inside Government 라는 영국 프로젝트의 코드네임이다. 이 프로젝트는 지속 가능하고 국민들이 보다 쉽게 접근할 수 있도록 모든 부처의 서비스를 온라인에 구축하는 것을 목표로 한다. 이 멋진 이름과 거창한 목표가 담긴 오픈소스 프로젝트는 한 마디로 영국 정부 홈페이지이다. 하지만 우리나라의 정부 홈페이지를 생각하면 큰 오산이다. 홈페이지에 들어가자마자 보이는 소개글은 다음과 같다.</p>
<blockquote><p>‘the best place to find government services and informations, Simpler, clearer, faster’</p></blockquote>
<p>프로젝트 목표대로 모든 정부 기관과 각 부처의 정보가 모두 담겨있지만 간편하고 쉽게 빠르게 찾아볼 수 있다. 또한 정부로부터 필요한 서비스나 정보가 있다면 역시 쉽게 찾도록 구축되어 있다. 혈세로 만든 것을 국민들에게 그대로 돌려주다는 것만으로 중요한 오픈소스 프로젝트가 아니다. 프로젝트의 목표부터 사이트의 설계, 디자인까지 국민들을 위해 만들어진 곳이다.</td>
</tr>
<tr>
<td rowspan="2"><a title="wet-boew" href="https://github.com/wet-boew/wet-boew" target="_blank">wet-boew</a></td>
<td style="text-align: center"><a title="캐나다 정부 홈페이지" href="http://www.canada.ca" target="_blank">중앙 정부</a>(캐나다)</td>
<td style="text-align: center">615</td>
<td style="text-align: center">Javascript</td>
</tr>
<tr>
<td colspan="4">웹 사용자 경험 툴킷(Web Experience Toolkit, WET)은 캐나다 정부의 주도로 만들어진 오픈소스 프로젝트로 프론트-엔드(Front-End) 프레임워크이다. 이 툴킷에는 뛰어난 접근성, 사용성, 상호 소통이 가능하며 모바일과 다국어를 지원해주는 웹사이트를 쉽게 만들기 위한 코드 라이브러리 모음이 담겨있다. 최신 프레임워크에 뒤떨어지지 않는 테마들과 웹표준에 걸맞는 다양한 기능들을 지원한다. 특히 한국어도 지원하니 꼭 정부 기관이 아니더라도 일반 사용자들도 웹사이트 구축시 한번쯤 고려해볼만한 프로젝트이다.</td>
</tr>
<tr>
<td rowspan="2"><a title="mct" href="https://github.com/nasa/mct" target="_blank">Mission Control Technologies(MCT)</a></td>
<td style="text-align: center"><a title="나사 홈페이지" href="http://www.nasa.gov/" target="_blank">나사</a>(미국)</td>
<td style="text-align: center">426</td>
<td style="text-align: center">java</td>
</tr>
<tr>
<td colspan="4">미국 나사에서 공개한 오픈소스 프로젝트이다. 많은 데이터를 다루는 곳답게 실시간으로 데이터를 모니터링하고 시각화할 수 있는 플랫폼을 구축하여 공개하였다. 처음에는 우주선이 임무를 수행하는 도중에 생기는 데이터를 분석하고 시각화하기 위해 만들었지만 광범위한 데이터에도 활용할 수 있다고 한다. 아마 최근에 혜성에 착륙을 성공한 로제타 탐사선이 수행하는 임무도 이 기술로 분석하고 있지 않을까?</td>
</tr>
<tr>
<td rowspan="2"><a title="playbook" href="https://github.com/whitehouse/playbook" target="_blank">playbook</a></td>
<td style="text-align: center"><a title="백악관 홈페이지" href="http://whitehouse.gov/" target="_blank">백악관</a>(미국)</td>
<td style="text-align: center">433</td>
<td style="text-align: center">java</td>
</tr>
<tr>
<td colspan="4">Playbook 프로젝트는 디지털 서비스 정책에 대한 일종의 가이드라인이다. 국민들이 정부로부터 필요한 점들을 잘 만족시켜주기 위하여 디지털 서비스를 어떻게 구축해야 할까?라는 기본적인 질문에서 출발해서 만들어졌다.<br />
영국의 ‘Whitehall’ 프로젝트와 마찬가지로 이 프로젝트의 중심에는 국민이 있다. 정부가 만드는 모든 디지털 서비스에서 중요한 것은 자본도, 기술도 아닌 국민의 만족도이다. ‘18F’ 팀이 만들어지게 된 고민 중에는 다음과 같은 말이 있다.</p>
<blockquote><p>"단순히 정부의 웹사이트, 정책과 소프트웨어 제작 과정이 오픈소스로 이루어진 다는 것, 그 이상의 훨씬 더 중요한 문제이다.”</p></blockquote>
<p>정부가 만드는 것을 오픈소스로 공개하는 것이 가지는 의미는 단순히 코드를 공개하여 협업하는 데에 있지 않다. 세금으로 만든 거시브를 국민들에게 공개함과 동시에 모든 서비스의 중심에는 국민을 먼저 고려한 것들이 담겨있다.</td>
</tr>
<tr>
<td rowspan="2"><a title="wh-app-ios" href="https://github.com/WhiteHouse/wh-app-ios" target="_blank">wh-app-ios</a></td>
<td style="text-align: center"><a title="백악관 홈페이지" href="http://whitehouse.gov/" target="_blank">백악관</a>(미국)</td>
<td style="text-align: center">528</td>
<td style="text-align: center">iOS(Objective-C)</td>
</tr>
<tr>
<td colspan="4">백악관의 여러 소식을 쉽게 받아볼 수 있는 어플리케이션(iOS, 안드로이드 모두 제공)이다. 이 프로젝트의 목표는 단순하다. 어플리케이션의 기능이나 질을 높이기 위한 것도 있지만 다른 정부나 기관에서 이 오픈소스를 활용하여 그 시민들의 참여를 높일 수 있도록 잘 활용하도록 돕기 위함이다.</td>
</tr>
<tr>
<td rowspan="2"><a title="api-standards" href="https://github.com/WhiteHouse/api-standards" target="_blank">백악관 웹 API 표준</a></td>
<td style="text-align: center"><a title="백악관 홈페이지" href="http://whitehouse.gov/" target="_blank">백악관</a>(미국)</td>
<td style="text-align: center">819</td>
<td style="text-align: center">문서</td>
</tr>
<tr>
<td colspan="4">소스코드가 아닌 문서임에도 최고로 인기있는 정부 기관 오픈소스 프로젝트이다. 백악관에서 제공하는 웹 API의 다양한 예제와 가이드라인을 제공한다. 이로 인해 API의 일관성을 지키고 지속적으로 유지하는데 도움이 되며 다양한 플랫폼에 따른 좋은 가이드라인을 제공할 수 있다.<br />
일반 IT 기업에서는 API를 통한 플랫폼이 중요하기도 하며 일반 오픈소스 개발자들의 참여가 중요하기 때문에 API 표준이나 웹개발 스타일 가이드 문서를 제공하는 경우가 대다수이다. 하지만 정부 기관에서 웹 API 표준 문서를 만드는 일이 드물기도 하고 특히 이렇게 ‘잘’ 정돈되고 ‘자세히’ 작성된 문서가 오픈소스로(누구나 백악관의 웹 API 표준에 대해 잘못된 점이나 더 나은 의견을 건의할 수가 있다!) 공개하는 경우는 드물다. 아마 그런 의미에서 가장 좋아요가 높은 프로젝트가 아닐까?</td>
</tr>
</tbody>
</table>
