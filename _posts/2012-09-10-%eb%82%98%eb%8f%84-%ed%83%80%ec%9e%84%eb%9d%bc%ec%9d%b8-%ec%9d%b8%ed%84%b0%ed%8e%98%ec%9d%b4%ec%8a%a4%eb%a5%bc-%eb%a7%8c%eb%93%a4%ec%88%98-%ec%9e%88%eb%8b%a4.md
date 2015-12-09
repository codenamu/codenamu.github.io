---
title: 나도 타임라인 인터페이스를 만들수 있다.
author: Ejang
excerpt: 개발자가 아니여도 개발자 코스프레를 할 수 있는 소스들을 소개합니다.
layout: post
permalink: /2012/09/10/793/
dsq_thread_id:
  - 2782161724
categories:
  - 블로그
---
개발자가 아니여도 개발자 코스프레를 할 수 있는 소스들을 소개합니다.

그 첫번째로, 나도 타임라인 인터페이스를 만들수 있다.

<center>
</center>

[<img title="스크린샷 2012-09-10 오후 10.27.52" src="http://co-up.com/share/files/2012/09/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7-2012-09-10-%EC%98%A4%ED%9B%84-10.27.52.png" alt="" width="522" height="370" />][1]

사건이나 행사의 시작에서 부터 끝까지 시간 순서데로 트위터도 넣고 싶고 유투브 동영상도 넣고 싶고…  
구글 지도까지 깔끔하게 넣을 수 있는 방법입니다.

진보넷에서 최근에 <a href="http://timeline.verite.co/" target="_blank">Timeline JS</a>를 활용해서 인터넷 실명제 관련해서 시간순으로 여러가지 내용을 잘 정리한 바가 있답니다.

<a href="http://act.jinbo.net/timelineJS/internet_realname_system/" target="_blank"><img title="인터넷 실명제 위헌!! 실명제의 역사와 과제" src="http://co-up.com/share/files/2012/09/%EC%9D%B8%ED%84%B0%EB%84%B7-%EC%8B%A4%EB%AA%85%EC%A0%9C-%EC%9C%84%ED%97%8C-%EC%8B%A4%EB%AA%85%EC%A0%9C%EC%9D%98-%EC%97%AD%EC%82%AC%EC%99%80-%EA%B3%BC%EC%A0%9C.jpg" alt="" width="486" height="491" /></a>

<a href="http://act.jinbo.net/timelineJS/internet_realname_system/" target="_blank">[진보넷의 시간순서로 살펴보는, 타임라인 <인터넷 실명제의 역사와 과제>!]</a>

이렇게 타임라인을 만들 수 있는데 정말 어렵지 않습니다.

준비물 : 구글 문서 템플릿 + 그리고 복사해서 붙이기 기술

가능한 내용 : 트위터, 플릭커, 구글지도, 유투브, 비메오, 데일리모션, 위키피디어, 사운드클라우드

Html에 대한 지식이 있는 분들이라면 바로 <a href="https://github.com/VeriteCo/TimelineJS" target="_blank">Github</a>에 가서 확인해 보세요. 몇 줄 안되는 한글은 제가~V

응용 : 트위터를 시간 순서로 보여주기 특히 행사 관련

행사 이벤트 내용을 트위터 + 동영상을 섞어서 보여주기

특정 사건의 시작에서 부터 시간순서로 보여주기

자 지금 부터 시작해 봅시다.

#1. 시간 정보가 있는 데이터가 필요합니다. 연,월,일 정도면 충분합니다.

#2. 시간 정보를 기록할 수 있는 <a href="https://drive.google.com/previewtemplate?id=0AppSVxABhnltdEhzQjQ4MlpOaldjTmZLclQxQWFTOUE&mode=public&pli=1#" target="_blank">구글 템플릿으로 이동 </a>

#3. 템플릿 사용하기

#4. 템플릿에 시간 순서로 내용 채우기 (100 라인이 제한입니다.)

Start Date가 타임라인에서 보여지는 시작일 입니다. (필수)

End Date가  타임라이넹서 보여지는 종료일입니다. (옵션)

Headline :  머리글 (제목의 역할을 합니다.) (필수)

Text : 내용의 역할을 합니다. (옵션)

Media : 이미지,동영상,지도의 주소를 넣어줍니다. (옵션)

Media Credit : 미디어 출처를 적어줍니다.  (옵션)

Media Caption : 미디어에 설명글을 적어주는 칸입니다. (옵션)

Media Thumbnail : 32px x 32px 보닥 작은 이미지를 업로드 (옵션)

Type : 어떤 슬라이드가 타이틀이 될 지 정합니다. title라고 적어주세요 (옵션)

Tag : 카테고리 역할을 하고 6개 까지 분류를 할 수 있고 그 이상은 안나온데요. (옵션)

[<img title="Google Spreadsheet Example" src="http://co-up.com/share/files/2012/09/Google-Spreadsheet-Example.jpg" alt="" width="487" height="468" />][2]

&nbsp;

#6. 항목을 다 채운 경우 문서를 웹으로 출판한다. 구글 문서 도구 > FILE > Publish to the Web

#7. 새롭게 열리는 창에서 만들어준 URL 주소를 복사한다.

#8. <a href="http://timeline.verite.co/" target="_blank">TimelineJS Embed Generator</a> 에 URL를 입력한다.

#9. 필요한 항목을 선택한다. 언어에서 한국어도 있다는 사실~!!

#10. 오른쪽에 소스를 원하는 곳에 embed 한다.

큐레이션 툴인 Storify를 활용하시면 더 쉽게 사용이 가능합니다. [<a href="http://co-up.com/blog/archives/47596" target="_blank">참고</a>]

예제 > <a href="http://www.co-up.com/timeline/examples/demoday2012.html" target="_blank">트위터를 타임라인에 표시한 내용 : 2012 프라이머 데모데이 끝나고 정리</a>

<a href="http://www.co-up.com/timeline/examples/codenamu.html" target="_blank">Storify를 활용해서 해커톤 행사를 정리</a>

덧붙임

구글 문서 뿐아니라 JSON도 지원합니다.

TimelineJS 는 **[Knight News Innovation Lab][3] **프로젝트 중에 하나이며 [**Vérité****Co**][4] 에서 진행하고 있습니다.

 [1]: http://co-up.com/share/files/2012/09/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7-2012-09-10-%EC%98%A4%ED%9B%84-10.27.52.png
 [2]: http://co-up.com/share/files/2012/09/Google-Spreadsheet-Example.jpg
 [3]: http://knightlab.northwestern.edu/
 [4]: http://verite.co/