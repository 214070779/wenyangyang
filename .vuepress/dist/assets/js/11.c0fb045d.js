(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{210:function(n,e,a){"use strict";a.r(e);var i=a(28),r=Object(i.a)({},(function(){var n=this,e=n.$createElement,a=n._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[a("h1",{attrs:{id:"诗"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#诗"}},[n._v("#")]),n._v(" 诗")]),n._v(" "),a("p",[n._v('想必大家一定听说过 Nginx，若没听说过它，那么一定听过它的"同行"Apache 吧！\nNginx 的产生\nNginx 同 Apache 一样都是一种 Web 服务器。基于 REST 架构风格，以统一资源描述符（Uniform Resources Identifier）URI 或者统一资源定位符（Uniform Resources Locator）URL 作为沟通依据，通过 HTTP 协议提供各种网络服务。\n然而，这些服务器在设计之初受到当时环境的局限，例如当时的用户规模，网络带宽，产品特点等局限并且各自的定位和发展都不尽相同。这也使得各个 Web 服务器有着各自鲜明的特点。\nApache 的发展时期很长，而且是毫无争议的世界第一大服务器。它有着很多优点：稳定、开源、跨平台等等。\n它出现的时间太长了，它兴起的年代，互联网产业远远比不上现在。所以它被设计为一个重量级的。\n它不支持高并发的服务器。在 Apache 上运行数以万计的并发访问，会导致服务器消耗大量内存。\n操作系统对其进行进程或线程间的切换也消耗了大量的 CPU 资源，导致 HTTP 请求的平均响应速度降低。\n这些都决定了 Apache 不可能成为高性能 Web 服务器，轻量级高并发服务器 Nginx 就应运而生了。\n俄罗斯的工程师 Igor Sysoev，他在为 Rambler Media 工作期间，使用 C 语言开发了 Nginx。\nNginx 作为 Web 服务器一直为 Rambler Media 提供出色而又稳定的服务。然后呢，Igor Sysoev 将 Nginx 代码开源，并且赋予自由软件许可证。\n由于以下这几点，所以，Nginx 火了：\nNginx 使用基于事件驱动架构，使得其可以支持数以百万级别的 TCP 连接。高度的模块化和自由软件许可证使得第三方模块层出不穷（这是个开源的时代啊）。Nginx 是一个跨平台服务器，可以运行在 Linux、Windows、FreeBSD、Solaris、AIX、Mac OS 等操作系统上。这些优秀的设计带来的极大的稳定性。\nNginx 的用武之地\nNginx 是一款自由的、开源的、高性能的 HTTP 服务器和反向代理服务器；同时也是一个 IMAP、POP3、SMTP 代理服务器。\nNginx 可以作为一个 HTTP 服务器进行网站的发布处理，另外 Nginx 可以作为反向代理进行负载均衡的实现。\n关于代理\n说到代理，首先我们要明确一个概念，所谓代理就是一个代表、一个渠道；此时就涉及到两个角色，一个是被代理角色，一个是目标角色。\n被代理角色通过这个代理访问目标角色完成一些任务的过程称为代理操作过程；如同生活中的专卖店，客人到 adidas 专卖店买了一双鞋，这个专卖店就是代理，被代理角色就是 adidas 厂家，目标角色就是用户。')]),n._v(" "),a("h1",{attrs:{id:"远方"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#远方"}},[n._v("#")]),n._v(" 远方")]),n._v(" "),a("p",[n._v('说反向代理之前，我们先看看正向代理，正向代理也是大家最常接触到的代理模式，我们会从两个方面来说关于正向代理的处理模式，分别从软件方面和生活方面来解释一下什么叫正向代理。\n在如今的网络环境下，我们如果由于技术需要要去访问国外的某些网站，此时你会发现位于国外的某网站我们通过浏览器是没有办法访问的。\n此时大家可能都会用一个操作 FQ 进行访问，FQ 的方式主要是找到一个可以访问国外网站的代理服务器，我们将请求发送给代理服务器，代理服务器去访问国外的网站，然后将访问到的数据传递给我们！\n上述这样的代理模式称为正向代理，正向代理最大的特点是客户端非常明确要访问的服务器地址；服务器只清楚请求来自哪个代理服务器，而不清楚来自哪个具体的客户端；正向代理模式屏蔽或者隐藏了真实客户端信息。\n来看个示意图（我把客户端和正向代理框在一块，同属于一个环境，后面我有介绍）：\n总结来说：正向代理，"它代理的是客户端"，是一个位于客户端和原始服务器（Origin Server）之间的服务器，为了从原始服务器取得内容，客户端向代理发送一个请求并指定目标（原始服务器）。\n然后代理向原始服务器转交请求并将获得的内容返回给客户端。客户端必须要进行一些特别的设置才能使用正向代理。\n正向代理的用途：\n访问原来无法访问的资源，如 Google。可以做缓存，加速访问资源。对客户端访问授权，上网进行认证。代理可以记录用户访问记录（上网行为管理），对外隐藏用户信息。')])])}),[],!1,null,null,null);e.default=r.exports}}]);