const i18n=require('./en.json')

module.exports=function(messageKey){
    return i18n[messageKey];
}