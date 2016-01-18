---
layout: post
status: publish
published: true
title: "[춘식이의 코드이야기] 오픈소스, Emergence 구축하기"
author:
  display_name: "춘식"
  login: chunsik
  email: thechunsik@cckorea.org
  url: ''
author_login: chunsik
author_email: thechunsik@cckorea.org
wordpress_id: 14404
wordpress_url: http://codenamu.org/?p=14404
date: '2014-04-17 16:45:17 +0900'
date_gmt: '2014-04-17 07:45:17 +0900'
categories:
- "블로그"
- "춘식이의 코드이야기"
tags: []
comments: []
---
<p>안녕하세요, 코드나무에서 활동하고있는 춘식입니다.</p>
<p>씨씨코리아 상근활동가가 된지 얼마 되지 않아서 본격적으로 코드나무의 여러가지 활동을 시작하고 있는데요, 그 중 [춘식이의 코드이야기] 시리즈를 앞으로 여러분들께 매 주 보여드릴 예정입니다. [춘식이의 코드이야기]에서는 코드나무와 관련한 여러가지 국내/외 리서치와 동시에 홈페이지 개편 및 구축을 진행하면서 접하는 사건(?)/사고(?) 등을 에피소드 형태로 소개해드릴 예정이에요. 그 첫 시리즈로 이번에는 Code for Philly 팀의 Chris Alfano 와의 일화를 소개해드리겠습니다.</p>
<h2><strong>열린 정부를 위한 비영리단체, <a href="http://codeforamerica.org/">Code for America</a></strong></h2>
<p>[caption id="" align="alignnone" width="493"]<a href="https://www.flickr.com/photos/bytemarks/10506383683"><img class="    " alt="" src="https://farm3.staticflickr.com/2836/10506383683_26573b7427_o.jpg" width="493" height="370" /></a> 출처: https://www.flickr.com/photos/bytemarks/10506383683/)[/caption]</p>
<p>(참고영상: <a href="http://www.ted.com/talks/jennifer_pahlka_coding_a_better_government">Coding a Better Goverment - Jennifer Pahlka</a>)</p>
<p>코드나무같은 열린 정부를 추구하는 단체를 말할 때 빼놓기 힘든 곳이 바로 Code for America입니다. 미국에서 처음 만들어진 이 단체는 미국의 각 주의 정부 관료와 Civic Hacker - <em>자신의 재능을 도시문제를 해결하기 위한 곳에 사용하는 사람들</em> - 들을 연결해주는 허브와 같은 곳으로 도시의 여러가지 문제들을 해결하고 시민들에게 유용한 공공서비스를 개발하는데 주도적인 큰 역할을 해오고 있는 단체에요. 적극적으로 도시의 공공데이터를 개방하고 시민들의 편의를 위한 정부 관료들의 풍부한 지원과 개발자, 디자이너, 기획자, 스토리텔러 등 자신의 재능을 도시 문제를 해결하기 위해서 나서는 Civic Hacker들이 만나서 다양하고 성공적인 프로젝트들이 나오고 있죠. 그렇기 때문에 국내에서 열린 정부를 지향하기 위해 소식을 전하거나 및 프로젝트를 진행하기 위하여 리서치를 할 때 가장 레퍼런스가 될만한 곳이기도 합니다. 여러 프로젝트 중에서도 세계 각 지역의 Civic Hacking 그룹의 네트워크를 형성하는 '<a href="http://codeforamerica.org/brigade/">Brigade</a>'가 있는데요 제가 만날 수 있었던 사람은 바로 이 네트워크에 가입된 <a href="http://codeforphilly.com/">Code for Philly</a>의 CTO, <a href="http://www.meetup.com/Code-for-America-Philly/members/14053930/">Chris Alfano</a>입니다.</p>
<p>제가 막 코드나무 프로젝트에 참여한 시점에는 4년 동안 다양한 프로젝트를 진행해왔음에도 불구하고 여러가지 관련 자료나 결과물들이 여러곳에 흩뿌려져 있어서 활동가들조차도 쉽게 찾을 수 없는 환경이었습니다. 그래서 과정 및 결과물들을 쉽게 파악할 수 있도록 한 곳에 잘 정리하면서 홈페이지를 정돈하는 것이 첫번째 제가 맡은 임무였죠. 이 과정에서 홈페이지를 개편하고자 레퍼런스가 될만한 곳을 알아보기 위해 Brigade에 가입된 여러 그룹들의 홈페이지를 리서치하는 중에 Code for Philly 팀을 만나게 되었습니다.</p>
<h2><strong>'Make a better Philly through technology', <a href="http://codeforphilly.com/">Code for Philly</a></strong></h2>
<p>'Brigade' 네트워크에는 주로 미국 내 도시들 - <em>Code for '도시'</em> -과 해외 여러 국가들의 그룹이 가입되어 있는데 그 중 필라델피아에서 가입된 그룹이 바로 Code for Philly입니다. Code for Philly는 기본적으로 개방적인 프로젝트 중심으로 만들어진 그룹입니다. 필라델피아 시민이면 누구나 프로젝트를 생성하고 관리하고 참여하기 쉽도록 홈페이지가 구축되어 있고 홈페이지 자체는 들어가보시면 쉽게 알 수 있듯이 '기술을 통해 더 살기 좋은 필라델피아를 만들자'라는 슬로건을 가지면서 프로젝트 생성/참여/편집이 간편하고 자유로우며 프로젝트의 기반이 되는 언어 및 플랫폼이 무엇인지, 프로젝트의 주제가 무엇인지에 따라 쉽게 분류되어 있어요. 코드나무 뿐만 아니라 씨씨코리아의 프로젝트 관리 도구로써 도입하기에도 너무 좋은 구조를 가지고 있었죠! 알고보니 Code for Philly 팀에서 직접 만든 오픈소스 <a href="http://emr.ge/">Emergence</a>와 <a href="https://github.com/CfABrigadePhiladelphia/laddr">Laddr</a> 프로젝트를 통해 구축된 것이였습니다.</p>
<p><a href="http://codenamu.org/wp-content/uploads/2014/04/스크린샷-2014-04-17-오후-4.16.25.png"><img class=" wp-image-14416 alignnone" alt="tweet_chunsik_codeforphilly" src="http://codenamu.org/wp-content/uploads/2014/04/screenshot-2014-04-17-pm-4.16.25.png" width="361" height="314" /></a></p>
<p>이렇게 좋은 도구를 보고 그냥 지나칠 순 없었기 때문에 Code for Philly 트위터로 연락을 취해보았죠! 그랬더니 CodeforPhilly 팀 계정을 통해 곧바로 CTO, Chris Alfano의 이메일을 알아낼 수 있었고 이로부터 약 2주동안 이메일을 주고받으면서 Chris Alfano로부터 Emergence를 설치/운용하는데 필요한 가이드 뿐만 아니라 그 외의 여러가지 정보들을 알 수 있었습니다(공개된지 얼마 안된 오픈소스라서 미완성된 가이드 문서만 보고 설치하고 테스트해보기에는 저로서는 너무 힘들었기 떄문에.....ㅜㅜ..사실은 개인적인 생각으로 천재 해커들은 성격도 좋지 못하고 가이드 문서화도 게으르다(?)라는 편견을 가지고 있었기에 Chris Alfano와의 커뮤니케이션에 자신도 없는 상태였죠.)</p>
<h2><strong>하나의 서버로 여러개의 호스팅을, '<a href="http://emr.ge">Emergence</a>'</strong></h2>
<p>(독자를 위한 친절한 안내 - 여기부터는 외계어가 등장합니다 - 시작!)</p>
<p>Node.js로 만들어진 Emergence는 크게 두 부분, 'Kernel'과 'Skeleton'으로 구성되어 있습니다. 'Kernel'은 Nginx와 MySQL, PHP가 설치된 서버위에 가상머신을 만들어서 동시에 여러 사이트를 생성하고 관리하기 편하도록 만들어진 도구이고 'Skeleton'은 'Kernel' 위에 웹사이트를 구축할 수 있도록 만든  PHP  프레임워크입니다. Code for Philly 홈페이지는 바로 'Skeleton' 프레임워크로 만들어진 '<a href="https://github.com/CfABrigadePhiladelphia/laddr">Laddr</a>'라는 별도의 오픈소스 프로젝트 사이트로 'Kernel' 위에서 동작하고 있던 것이죠. HTTP 통신을 통해 파일시스템을 그대로 복사할 수 있는 '<a href="https://en.wikipedia.org/wiki/Webdav">WebDAV</a>' 프로토콜이 'Kernel'에 구현되어 있었기 때문에 코드나무에 적용하려면 저는 그냥 Kernel을 통해 laddr가 구현된 'laddr.poplar.phl.io'를 'labs.codenamu.org'에 복사해오기만 하면 되었습니다.(복사하기 위해서는 복사할 대상이 되는 부모사이트의 Emergence key 값이 필요한데 Chris와의 이메일을 통해서 제공받을 수 있었습니다.)!</p>
<p>여기서 한가지 문제가 발생했습니다. 문제는 Emergence 가상머신을 서버에 동작시키기 위해서는 독립적인 서버 한 대가 필요했는데 현재 씨씨코리아에서는 공유허브, 코드나무, 렛츠씨씨, 아트해프닝 등 리눅스 서버 1대 위에 여러가지 사이트를 호스팅하고 있었기 때문에 Emergence를 설치할 여유가 없었던 거죠. 개인 서버를 동원할 수도 없고 이 프로젝트를 포기하려던 찰나... 구원의 손길이 담긴 이메일을 받을 수 있었습니다. Code for Philly 팀에서 이미 Brigade 팀을 위한 Emergence 서버를 가지고 있기 때문에 수많은 Brigade 에 가입된 그룹의 사이트를 호스팅할 수 있는 여유가 있어서 코드나무 팀 역시 호스팅이 가능하다는 답변!!! 역시 우리의 천사 Chris.......</p>
<p>이렇게 하여 최종적으로 적용된 홈페이지가 바로 <a href="http://labs.codenamu.org">labs.codenamu.org</a> 입니다. 비록 아직 코드나무에 맞게 손을 보기 전이라서 Laddr의 초기 모습을 그대로 가지고 있지만 앞으로 공공데이터 캠프에서는 물론 코드나무를 통해 나오게될 프로젝트들로 가득찰 모습이 벌써부터 떠올라서 저는 기대를 왕창하는 중입니다!! PHP가 어색한 저로서는 이 곳을 잘 만들어가는데 아마 여러 개발자 활동가분들의 도움이 필요하겠지만요.</p>
<p>(독자를 위한 친절한 안내 - 여기까지 외계어 등장이 끝났습니다 - 끝!)</p>
<h2><strong>밀당의 선수, 천재 해커 Chris Alfano!</strong></h2>
<p>Chris Alfano 로부터 얻을 수 있었던 정보들을 잘 전달하기 위해서 이렇게 정리해서 적어보았지만 사실 이렇게 이메일을 주고받는동안 그와 밀당(?) 관계에 있었답니다. Emergence에 대한 가이드부터 서버를 제공해줄 수 있다는 메일까지 너무나 친절하게 안내해주던 그가 갑자기 메일이 뚝 끊겨버렸던거죠! 엄청난 기대에 부풀어 있던 저는 그런 상처(?)만 남은 채로 일주일동안이나 답변을 받을 수 없어서 이렇게 긴장되고 설렜던 Code for Philly, Chris와의 관계가 끝났구나 라고 생각하고 있었습니다. 하지만! 1주일 뒤에 받은 답장에서는 그동안 필라델피아에서 진행되었던 '<a href="http://2014.phillytechweek.com/">Philly Tech Week</a>'에 참여하느라 바빠서 답장이 늦었다는 내용으로 시작해 구축이 완료된 'labs.codenamu.org'를 안내받을 수 있었습니다! 그동안 설렘, 긴장, 배신감(?) 등의 기분을 개인적인 SNS로 분출하고 있던 찰나에 다시 그와의 돈독한 관계를 확인할 수 있었죠!(...)</p>
<p>게으른 독학으로 개발자를 꿈꾸는 저로서는 단지 평상시 사용하는 Bootstrap 등 유명한 오픈소스 프로젝트처럼 사용뿐만 아니라 아니라 이렇게 직접 오픈소스 개발자와 커뮤니케이션을 하면서 설치하고 적용까지 할 수 있었던 소중한 경험이였습니다. 협업을 통하여 개발자 스스로와 프로젝트의 발전이 먼나라 이야기가 아니라는 것을 깨달았던 것이죠! 비록 제가 코드를 가지고 오픈소스 자체에 기여를 했던 경험은 아니지만...후후(코드나무에 적용하며 생기는 이슈들을 열심히 <a href="https://github.com/CfABrigadePhiladelphia/laddr/issues?state=open">Github <em></em>Issue</a> 게시판에 알려드리고 있답니다(허세)(허세)). 매일 아침 메일함에 도착해있던 발신: Chris Alfano의 메일들과 친절함이 가득찬 가이드 내용들을 보면서 천재 해커에 대한 제 스스로의 편견이 모두 날아가버렸답니다. Chris Alfano가 13살부터 자바스크립트 개발을 했다는 것을 알고 그 이후로 천재 해커 별명을 제 맘대로 붙였지만 말이죠 ^^.</p>
<p>&nbsp;</p>
<h4><strong>[춘식의 요약 정보]</strong></h4>
<p>&nbsp;</p>
<p>[caption id="" align="alignnone" width="512"]<a href="https://www.flickr.com/photos/lizettegreco/382984147/"><img class=" " alt="" src="https://farm1.staticflickr.com/153/382984147_2adc8ab4ac_z.jpg" width="512" height="384" /></a> 출처: https://www.flickr.com/photos/lizettegreco/382984147/[/caption]</p>
<p>- <a href="http://cod">Code for America</a>: 미국에서 만들어진 열린 정부를 추구하는 단체로 정부 관료와 일반 시민들과 함께 시민을 위한, 시민에 의한 정부를 만들기 위해 노력하고 있으며 세계 각 지역의 열린 정부 그룹을 연결하는 네트워크 'Brigade', 공공정보를 활용한 스타트업을 지원하는 'Civic Startup' 등 다양한 프로젝트를 진행하고 있습니다.</p>
<p>- <a href="http://codeforphilly.com/">Code for Philly</a>: 'Brigade'에 가입된 필라델피아 그룹으로 CTO, Chris Alfano를 중심으로 이번 코드나무에 적용된 오픈소스 'Emergence' 등을 만든 곳입니다.</p>
<p>- <a href="http://emr.ge">Emergence</a>: 서버 위에 설치하는 가상머신 오픈소스로 하나의 서버로 여러 개의 사이트를 편리하게 관리할 수 있도록 만든 도구입니다. 현재 Gentoo, Ubuntu 서버를 지원하고 있습니다.</p>
<p>- <a href="https://github.com/CfABrigadePhiladelphia/laddr">Laddr</a>: 코드나무에 적용해보기로 마음을 먹게 된 오픈소스로 여러 사람들이 쉽게 프로젝트를 생성/참여/관리할 수 있도록 만들어진 사이트입니다. 현재 Laddr를 구축하기 위해서는 Emergence가 구축된 서버가 필요합니다.</p>
