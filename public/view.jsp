<%@ include file="/init.jsp" %>
<div id="<portlet:namespace />-root"></div>

<script>
  Liferay.on('allPortletsReady',function() {
  	window.reactRoot('<portlet:namespace />-root');
  });
</script>
