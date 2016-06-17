---
layout: post
status: publish
published: true
title: "[춘식이의 코드이야기] 대표 오픈소스 라이선스, 한 눈에 보기!"
author:
  display_name: thechunsik
  login: thechunsik
  email: thechunsik@gmail.com
  url: http://chunsik.org
author_login: thechunsik
author_email: thechunsik@gmail.com
author_url: http://chunsik.org
wordpress_id: 16237
wordpress_url: http://codenamu.org/?p=16237
date: '2014-10-10 14:22:27 +0900'
date_gmt: '2014-10-10 05:22:27 +0900'
categories:
- "춘식이의 코드이야기"
---

<p>부끄럽지만 용기내어 고백해볼게요. <a href="http://cckorea.org" target="_blank">크리에이티브 커먼즈 코리아</a> 활동가로 지내면서 <a href="http://cckorea.org/xe/?mid=ccl" target="_blank">크리에이티브 커먼즈 라이선스(CCL)</a>엔&nbsp;어느정도 익숙하고 많은 사례도 접해왔지만, ‘오픈소스를 활용하고 오픈소스를 만들자’라고 주창하는 오픈소스 개발자로서 오픈소스 라이선스에 대한 기본 지식은 부족했습니다. 그냥 GPL, 아파치, MIT 라이선스가 주석으로 붙어 있으면 ‘아, 오픈소스구나’라고 생각하는 정도였죠. 많은 사람들이 가져다 쓰는 오픈소스 소프트웨어를 가져다 쓰면서도 ‘어떻게 공개해야 하지?’라는 고민은 해본 적 없었습니다. 특정 오픈소스 프로젝트에서 ‘우리가 오픈소스 정책을 바꿨어. 왜 이런 결정을 내렸냐면…’ 이라는 공지를 보며 제대로 이해를 못하면서 그냥 넘어간 적도 있었습니다.</p>
<div id="attachment_209331" style="width: 100%" class="wp-caption aligncenter"><a class="cboxElement fullsize-caption" href="http://www.bloter.net/wp-content/uploads/2014/10/shame.jpg" rel="lightbox[209318]" title="GPL·AGPL·MPL…한눈에 보는 오픈소스SW 라이선스"><img class="wp-image-209331 size-medium fullsize-image" src="http://www.bloter.net/wp-content/uploads/2014/10/shame-765x573.jpg" alt="shame" width="100%"></a>
<p class="wp-caption-text">부끄럽지만 고백합니다…. CC0.</p>
</div>
<p>그래서 격주에 한 번 연재하는 <a href="http://codenamu.org/category/chunsik-codestory/" target="_blank">춘식이의 코드이야기</a>를 기회삼아 스스로 오픈소스 라이선스에 대해 공부할 기회를 갖기로 마음먹었습니다. 대표적인 오픈소스 라이선스들을 알아보고, 특징과 조건들을 비교해보았습니다. 대표 적용 사례도 소개합니다. 여기 정리한 라이선스 외에도 수많은 오픈소스 라이선스들이 존재하며 여기 있는 라이선스조차도 제가 정리하지 못한 많은 부분들이 많지만, 앞으로는 오픈소스 SW를 활용하거나 오픈소스 SW를 만들 때 라이선스에 대해 한 번쯤 고민할 수 있는 계기가 됐으면 좋겠습니다. 수정하거나 보완할 내용이 있으면 알려주시기 바랍니다.</p>
<p><em>*이하 설명하고 있는 오픈소스 라이선스는 소스코드에 적용되는 라이선스이며 일반적으로 소스코드에 대한 문서나 콘텐츠에 대한 라이선스는 CCL 등 별도의 라이선스를 적용합니다.</em></p>
<p><br><br></p>
<h1>목록</h1>
<h3><a href="http://codenamu.org/2014/10/10/16237/#histroy">라이선스 종류</a> | <a href="http://codenamu.org/2014/10/10/16237/#required">조건표</a></h3>
<p><br><br><br></p>
<h1 id="history">라이선스 종류</h1>
<ul>
<li>
<h3>Apache License</h3>
<p>- 아파치 라이선스(Apache License)는 자신들의 소프트웨어에 적용하기 위하여 <a href="https://ko.wikipedia.org/wiki/%EC%95%84%ED%8C%8C%EC%B9%98_%EC%86%8C%ED%94%84%ED%8A%B8%EC%9B%A8%EC%96%B4_%EC%9E%AC%EB%8B%A8">아파치 소프트웨어 재단</a> 자체적으로 만든 라이선스이다. 소스코드에 대한 공개 의무 등의 의무사항은 없지만 아파치 라이선스의 소스코드를 수정하여 배포하는 경우 아파치 라이선스, 버전 2.0을 꼭 포함시켜야 하며 아파치 재단에서 만든 소프트웨어임을 밝혀야 한다.</p>
<p>- <a href="http://source.android.com/" target="_blank">안드로이드</a>(v2.0) | <a href="http://hadoop.apache.org/" target="_blank">하둡</a>(v2.0)</p>
</li>
<li>
<h3>GNU(Gnu is Not Unix) General Public License(GPL)</h3>
<p>- <a href="http://www.fsf.org/">자유 소프트웨어 재단(Free Software Foundation, FSF)</a>에서 만든 라이선스로 GNU 프로젝트로 배포하는 소프트웨어(Emacs, GNU 디버거(GDB), GNU 컴파일러 모음(GCC) 등)에 적용하기 위하여 <a href="https://ko.wikipedia.org/wiki/%EB%A6%AC%EC%B2%98%EB%93%9C_%EC%8A%A4%ED%86%A8%EB%A8%BC">리처드 스톨먼(Richard Stallman)</a>이 만든 라이선스이다. 가장 큰 특징은 자유 소프트웨어 재단 답게 가장 강한 제약 조건을 포함하고 있는 카피레프트(Copyleft) 조항. GPL 프로그램은 어떤 목적으로, 어떤 형태로든 사용할 수 있지만 사용하거나 변경된 프로그램을 배포하는 경우 무조건 동일한 라이선스 즉, GPL로 공개해야 한다는 강력한 조항이 담겨있다.</p>
<p>- <a href="http://www.mozilla.or.kr/ko/firefox/" target="_blank">Mozilla Firefox</a>(v2.0) | <a href="www.linux.org/" target="_blank">Linux</a> 커널(v2.0) | <a href="http://git-scm.com/" target="_blank">Git</a>(v2.0) | <a href="https://mariadb.org/" target="_blank">MariaDB</a>(v2.0) | <a href="http://wordpress.org/" target="_blank">Wordpress</a>(v2.0) | <a href="http://drupal.org/" target="_blank">Drupal</a>(v2.0)</p>
</li>
<li>
<h3>GNU Affero GPL(AGPL)</h3>
<p>- GPL을 기반으로 만든 라이선스로 버전1, 2는 Affero, 가장 최신 버전인 버전3은 자유 소프트웨어 재단에 의하여 개발되었다. 수정한 소스코드를 서버에서만 사용하는 개발자가 그 프로그램을 배포하지 않을 경우 사용자는 소스코드를 가질 수가 없는 문제를 해결하기 위하여 서버에서 프로그램을 실행하여 다른 사용자들과 통신하게 된다면, 실행되고 있는 프로그램의 소스 코드를 사용자들이 다운로드 받을 수 있게 해야 한다는 독특한 조항이 담겨있다.</p>
<p>- <a href="http://www.mongodb.org/" target="_blank">MongoDB</a>(v3.0)</p>
</li>
<li>
<h3>GNU Lesser GPL(LGPL)</h3>
<p>- 자유 소프트웨어 재단의 강력한 철학이 담긴 GPL의 카피레프트 조항을 보완하기 위하여 만든 라이선스이다. 단순히 소프트웨어를 사용하기만 하더라도 해당 소스코드를 GPL로 공개해야 하는 부담감 때문에 상용 소프트웨어로서는 쓰이기 부담스러운 단점이 있다. 따라서 좋은 자유 소프트웨어 제품이 더 많이 사용될 수 있고 표준이 되도록 유도하기 위하여 단순한 라이브러리/모듈 링크를 허용한 라이선스이다. 원래는 한정된 라이브러리에만 적용하기 위한 의도로 'Library GPL'이라는 이름이였으나 모든 라이브러리에 적용된다는 오해를 사 'Lesser GPL'로 변경되었다.</p>
<p>- <a href="http://www.mozilla.or.kr/ko/firefox/" target="_blank">Mozilla Firefox</a>(v2.1)</p>
</li>
<li>
<h3>MIT License</h3>
<p>- MIT 라이선스(MIT License)는 미국 매사추세츠 공과대학교(MIT)에서 해당 대학의 소프트웨어 공학도들을 돕기 위해 개발한 라이선스다. 라이선스와 저작권 관련 명시만 지켜주면 되는 라이선스로 가장 느슨한 조건을 가진 라이선스 중 하나기 때문에 인기가 많다.</p>
<p>- <a href="http://getbootstrap.com/" target="_blank">Bootstrap</a> | <a href="https://angularjs.org/" target="_blank">Angular.js</a> | <a href="http://backbonejs.org/" target="_blank">Backbone.js</a> | <a href="http://jquery.com/" target="_blank">jQuery</a></p>
</li>
<li>
<h3>Artistic License</h3>
<p>- Perl 프로그래밍 언어를 사용하던 Larry Wall이 표준 펄(Perl) 기능을 위해 개발한 라이선스로, 이 단어의 어원은 문학에서 문법상 틀린 표현이라도 시적인 효과를 위하여 허용하는 것을 의미하는 'Articstic License'(시적 허용)를 참조하여 만들어졌다.</p>
<p>- <a href="http://www.npmjs.com/" target="_blank">NPM(Node Package Manager)</a>(v2.0)</p>
</li>
<li>
<h3>Eclipse License</h3>
<p>- 이클립스사에서 비즈니스 환경에 적합하도록 만든 기업 친화적인 라이선스로 강력한 카피레프트 조항이 담긴 GPL보다 제약 조건이 완화된 라이선스이다.</p>
<p>- <a href="https://www.eclipse.org/" target="_blank">Eclipse</a>(v1.0)</p>
</li>
<li>
<h3>Berkeley Software Distribution(BSD) License</h3>
<p>- 버클리의 캘리포니아 대학에서 배포하는 공개 소프트웨어의 라이선스이다. BSD 라이선스의 경우에는 BSD 자체가 공공기관에서 만들어낸 것이므로 공공의 몫으로 돌려주자는 의미가 강하므로 라이선스 자체에는 아무런 제한 없이 누구나 자신의 용도로 사용할 수 있도록 만들어진 것으로 라이선스 및 저작권 표시 조건 외에 굉장히 자유로운 라이선스 중 하나이다. </p>
<p>- <a href="http://nginx.org/" target="_blank">Nginx</a>(The BSD 2-Clause License)</p>
</li>
<li>
<h3>Mozilla Public License(MPL)</h3>
<p>- 모질라 공용 허가서(Mozilla Public License, MPL)는 과거 넷스케이프(Netscape) 브라우저의 소스코드를 공개하기 위해 개발된 라이선스이다. 초기 1.0 버전은 넷스케이프 커뮤니케이션즈 코퍼레이션스의 변호사였던 <a href="https://en.wikipedia.org/wiki/Mitchell_Baker">미첼 베이커(Mitchell Baker)</a>가 작성하였고 이후 1.1, 2.0 버전은 모질라 재단이 작성하였다. MPL의 특징은 소스코드와 실행파일의 저작권을 분리함으로써 수정한 소스코드의 경우 MPL로 공개하고 원저작자에게 수정한 부분에 대해 알려야 하지만 실행파일은 독점 라이선스로 배포가 가능한 점이다. 즉, <b>사용한 MPL 소프트웨어와 수정한 MPL 소프트웨어에 대한 공개 의무</b>만을 가지며 <b>별도의 소스코드와 실행파일은 독점 라이선스</b>를 가질 수 있다.</p>
<p>- <a href="http://www.mozilla.or.kr/ko/firefox/" target="_blank">Mozilla Firefox</a>(v1.1) | <a href="https://www.mozilla.org/ko/thunderbird/" target="_blank">Mozilla Thunderbird</a>(v1.1)</p>
</li>
</ul>
<h1 id="required">조건표</h1>
<table>
<thead>
<tr>
<th>라이선스</th>
<th>필수 사항(Required)</th>
<th>허락 조건(Permitted)</th>
<th>금지 조건(Forbidden)</th>
</tr>
</thead>
<colgroup>
<col width="15%" />
<col width="33%" />
<col width="26%" />
<col width="24%" /> </colgroup>
<tbody>
<tr>
<td style="text-align: center;">Apache License<br><b><i>제약조건:하</i></b></td>
<td>
<ul class="license-required">
<li><span class="license-sprite"></span>라이선스 및 저작권 명시</li>
<li><span class="license-sprite"></span>변경사항 안내</li>
</ul>
</td>
<td>
<ul class="license-permitted">
<li><span class="license-sprite"></span>상업적 이용 가능</li>
<li><span class="license-sprite"></span>배포 가능</li>
<li><span class="license-sprite"></span>수정 가능</li>
<li><span class="license-sprite"></span>특허 신청 가능</li>
<li><span class="license-sprite"></span>사적 이용 가능</li>
<li><span class="license-sprite"></span>2차 라이선스</li>
</ul>
</td>
<td>
<ul class="license-forbidden">
<li><span class="license-sprite"></span>보증책임 없음</li>
<li style="color: #c6403d;"><span class="license-sprite"></span>상표권 침해 금지</li>
</ul>
</td>
</tr>
<tr>
<td style="text-align: center;">GPL<br>v2.0/v3.0<br><b><i>제약조건:상</i></b></td>
<td>
<ul class="license-required">
<li style="color: #0099d6;"><span class="license-sprite"></span>수정한 소스코드 혹은 GPL 소스코드를 활용한 소프트웨어 모두 GPL로 공개</li>
<li><span class="license-sprite"></span>라이선스 및 저작권 명시</li>
<li><span class="license-sprite"></span>변경사항 안내</li>
</ul>
</td>
<td>
<ul class="license-permitted">
<li><span class="license-sprite"></span>상업적 이용 가능</li>
<li><span class="license-sprite"></span>배포 가능</li>
<li><span class="license-sprite"></span>수정 가능</li>
<li><span class="license-sprite"></span>특허 신청 가능</li>
<li><span class="license-sprite"></span>사적 이용 가능</li>
</ul>
</td>
<td>
<ul class="license-forbidden">
<li><span class="license-sprite"></span>보증책임 없음</li>
<li><span class="license-sprite"></span>2차 라이선스</li>
</ul>
</td>
</tr>
<tr>
<td style="text-align: center;">GNU AGPL<br>(Affero GPL)<br>v3.0<br><b><i>제약조건:최상</i></b></td>
<td>
<ul class="license-required">
<li style="color: #0099d6;"><span class="license-sprite"></span>수정한 소스코드 혹은 AGPL 소스코드를 활용한 소프트웨어 모두 AGPL로 공개</li>
<li><span class="license-sprite"></span>라이선스 및 저작권 명시</li>
<li><span class="license-sprite"></span>변경사항 안내</li>
<li style="color: #0099d6;"><span class="license-sprite"></span>네트워크상 소프트웨어 사용자에게 소스코드 공개</li>
</ul>
</td>
<td>
<ul class="license-permitted">
<li><span class="license-sprite"></span>상업적 이용 가능</li>
<li><span class="license-sprite"></span>배포 가능</li>
<li><span class="license-sprite"></span>수정 가능</li>
<li><span class="license-sprite"></span>특허 신청 가능</li>
<li><span class="license-sprite"></span>사적 이용 가능</li>
</ul>
</td>
<td>
<ul class="license-forbidden">
<li><span class="license-sprite"></span>보증책임 없음</li>
<li><span class="license-sprite"></span>2차 라이선스</li>
</ul>
</td>
</tr>
<tr>
<td style="text-align: center;">GNU LGPL<br>(Lesser GPL)<br><br />
v2.1/v3.0<br><b><i>제약조건:중</i></b></td>
<td>
<ul class="license-required">
<li style="color: #0099d6;"><span class="license-sprite"></span>수정한 소스코드 LGPL로 공개(단순 활용시 공개 의무 없음)</li>
<li><span class="license-sprite"></span>라이선스 및 저작권 명시</li>
</ul>
</td>
<td>
<ul class="license-permitted">
<li><span class="license-sprite"></span>상업적 이용 가능</li>
<li><span class="license-sprite"></span>배포 가능</li>
<li><span class="license-sprite"></span>수정 가능</li>
<li><span class="license-sprite"></span>특허 신청 가능</li>
<li><span class="license-sprite"></span>사적 이용 가능</li>
<li><span class="license-sprite"></span>2차 라이선스</li>
</ul>
</td>
<td>
<ul class="license-forbidden">
<li><span class="license-sprite"></span>보증책임 없음</li>
</ul>
</td>
</tr>
<tr>
<td style="text-align: center;">MIT<br />
License<br><b><i>제약조건:하</i></b></td>
<td>
<ul class="license-required">
<li><span class="license-sprite"></span>라이선스 및 저작권 명시</li>
</ul>
</td>
<td>
<ul class="license-permitted">
<li><span class="license-sprite"></span>상업적 이용 가능</li>
<li><span class="license-sprite"></span>배포 가능</li>
<li><span class="license-sprite"></span>수정 가능</li>
<li><span class="license-sprite"></span>사적 이용 가능</li>
<li><span class="license-sprite"></span>2차 라이선스</li>
</ul>
</td>
<td>
<ul class="license-forbidden">
<li><span class="license-sprite"></span>보증책임 없음</li>
</ul>
</td>
</tr>
<tr>
<td style="text-align: center;">Artistic<br />
License<br><b><i>제약조건:하</i></b></td>
<td>
<ul class="license-required">
<li><span class="license-sprite"></span>라이선스 및 저작권 명시</li>
<li><span class="license-sprite"></span>변경사항 안내</li>
</ul>
</td>
<td>
<ul class="license-permitted">
<li><span class="license-sprite"></span>상업적 이용 가능</li>
<li><span class="license-sprite"></span>배포 가능</li>
<li><span class="license-sprite"></span>수정 가능</li>
<li><span class="license-sprite"></span>사적 이용 가능</li>
<li><span class="license-sprite"></span>2차 라이선스</li>
</ul>
</td>
<td>
<ul class="license-forbidden">
<li><span class="license-sprite"></span>보증책임 없음</li>
<li style="color: #c6403d;"><span class="license-sprite"></span>상표권 침해 금지</li>
</ul>
</td>
</tr>
<tr>
<td style="text-align: center;">Eclipse<br />
License<br><b><i>제약조건:중</i></b></td>
<td>
<ul class="license-required">
<li style="color: #0099d6;"><span class="license-sprite"></span>수정한 소스코드 Eclipse로 공개(단순 활용시 공개 의무 없음)</li>
<li><span class="license-sprite"></span>라이선스 및 저작권 명시</li>
</ul>
</td>
<td>
<ul class="license-permitted">
<li><span class="license-sprite"></span>상업적 이용 가능</li>
<li><span class="license-sprite"></span>배포 가능</li>
<li><span class="license-sprite"></span>수정 가능</li>
<li><span class="license-sprite"></span>특허 신청 가능</li>
<li><span class="license-sprite"></span>사적 이용 가능</li>
<li><span class="license-sprite"></span>2차 라이선스</li>
</ul>
</td>
<td>
<ul class="license-forbidden">
<li><span class="license-sprite"></span>보증책임 없음</li>
</ul>
</td>
</tr>
<tr>
<td style="text-align: center;">BSD<br />
License<br><b><i>제약조건:하</i></b></td>
<td>
<ul class="license-required">
<li><span class="license-sprite"></span>라이선스 및 저작권 명시</li>
</ul>
</td>
<td>
<ul class="license-permitted">
<li><span class="license-sprite"></span>상업적 이용 가능</li>
<li><span class="license-sprite"></span>배포 가능</li>
<li><span class="license-sprite"></span>수정 가능</li>
<li><span class="license-sprite"></span>사적 이용 가능</li>
<li><span class="license-sprite"></span>2차 라이선스</li>
</ul>
</td>
<td>
<ul class="license-forbidden">
<li><span class="license-sprite"></span>보증책임 없음</li>
</ul>
</td>
</tr>
<tr>
<td style="text-align: center;">MPL v2.0<br />
(Mozilla Public License)<br><b><i>제약조건:중</i></b></td>
<td>
<ul class="license-required">
<li style="color: #0099d6;"><span class="license-sprite"></span>수정한 소스코드 MPL로 공개(단순 활용시 공개 의무 없음)</li>
<li><span class="license-sprite"></span>라이선스 및 저작권 명시</li>
<li class="color: #0099d6;"><span class="license-sprite"></span>특허기술이 구현된 프로그램의 경우 관련 사실을 ‘LEGAL’파일에 기록하여 배포</li>
</ul>
</td>
<td>
<ul class="license-permitted">
<li><span class="license-sprite"></span>상업적 이용 가능</li>
<li><span class="license-sprite"></span>배포 가능</li>
<li><span class="license-sprite"></span>수정 가능</li>
<li><span class="license-sprite"></span>특허 신청 가능</li>
<li><span class="license-sprite"></span>사적 이용 가능</li>
<li><span class="license-sprite"></span>2차 라이선스</li>
</ul>
</td>
<td>
<ul class="license-forbidden">
<li><span class="license-sprite"></span>보증책임 없음</li>
<li style="color: #c6403d;"><span class="license-sprite"></span>상표권 침해 금지</li>
</ul>
</td>
</tr>
<tr>
<td style="text-align: center;">Beerware<br><b><i>제약조건: 최하</i></b></td>
<td></td>
<td>
<ul class="license-permitted">
<li><span class="license-sprite"></span>맥주 사주기</li>
</ul>
</td>
<td></td>
</tr>
</tbody>
</table>
<p style="text-align:center;">
<a href="https://www.flickr.com/photos/slworking/6997121182" title="I don&#x27;t always drink beer at the office, but when I do, I prefer Shiner.  Stay thirsty my geeks. by slworking2, on Flickr"><img src="https://farm8.staticflickr.com/7250/6997121182_c21866921d.jpg" width="500" height="500" alt="I don&#x27;t always drink beer at the office, but when I do, I prefer Shiner.  Stay thirsty my geeks."></a></p>
<p style="text-align:center;">뭐가 이리 복잡해! 그냥 나중에 만나면 맥주나 한 잔 사줘! - <a href="https://en.wikipedia.org/wiki/Beerware">Beerware License를 적용하기</a><br><br />
CC BY-NC-SA, Image from @slworking2 - <a href="https://flic.kr/p/bEj5mo" target="_blank">https://flic.kr/p/bEj5mo</a></p>
<p style="text-align: right;">
<ul style="list-style:none;">
<li>CC BY 3.0, <a href="http://choosealicense.com/licenses/" target="_blank">http://choosealicense.com/licenses/</a></li>
<li>CC BY-NC-SA 2.0, <a href="https://wiki.kldp.org/wiki.php/OpenSourceLicenseGuide#s-3.2.4" target="_blank">https://wiki.kldp.org/wiki.php/OpenSourceLicenseGuide#s-3.2.4</a></li>
<li>CC BY-SA 3.0, <a href="https://ko.wikipedia.org/wiki/GNU_%EC%95%BD%EC%86%8C_%EC%9D%BC%EB%B0%98_%EA%B3%B5%EC%A4%91_%EC%82%AC%EC%9A%A9_%ED%97%88%EA%B0%80%EC%84%9C" target="_blank">https://ko.wikipedia.org/wiki/GNU_약소_일반_공중_사용_허가서</a></li>
<li>CC BY-SA, <a href="https://en.wikipedia.org/wiki/Affero_General_Public_License" target="_blank">https://en.wikipedia.org/wiki/Affero_General_Public_License</a></li>
<li>CC BY-SA, <a href="https://en.wikipedia.org/wiki/Eclipse_Public_License" target="_blank">https://en.wikipedia.org/wiki/Eclipse_Public_License</a></li>
<li>CC BY-SA, <a href="https://en.wikipedia.org/wiki/Artistic_license" target="_blank">https://en.wikipedia.org/wiki/Artistic_license</a></li>
<style>
h1,h2,h3{text-align:center;}ul h1,ul h2,ul h3{text-align:left;}table ul{list-style:none;}td{text-align:left;}.license-forbidden span {<br />
    background-position: -16px 0px;<br />
    width: 12px;<br />
    height: 12px;<br />
}.license-required span {<br />
    background-position: -40px 0px;<br />
    width: 12px;<br />
    height: 12px;<br />
}.license-permitted span {<br />
    background-position: -28px 0px;<br />
    width: 12px;<br />
    height: 12px;<br />
}.license-sprite {<br />
    background-image: url('http://codenamu.org/wp-content/uploads/2014/10/license-sprite.png');<br />
    background-repeat: no-repeat;<br />
    display: inline-block;<br />
}<br />
</style>
