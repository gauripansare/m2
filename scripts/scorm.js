var _Scormfunction = (function(){
    return{
     GetBookMark:function() {
        var bookmark = scorm.get("cmi.location");
        return bookmark;
    },

    setBookMark:function(bookmark) {
		
        var setlessonLocation = scorm.set("cmi.location", bookmark + "" );
    }
}
});