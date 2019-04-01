const CompiledReactWidget = {
  widgetId: 'crw',
  eateId: 'crw_container',
  version: '0.1'
};

CompiledReactWidget.getWidgetScript = function getWidgetScript() {
  return document.getElementById(CompiledReactWidget.widgetId);
};

CompiledReactWidget.getToken = function getWidgetScript() {
  return CompiledReactWidget.getWidgetScript().getAttribute('token');
};

CompiledReactWidget.getHost = function getWidgetScript() {
  const src = CompiledReactWidget.getWidgetScript().getAttribute('src');
  return new URL(src).origin;
};

global.CompiledReactWidget = CompiledReactWidget;
export default CompiledReactWidget;
