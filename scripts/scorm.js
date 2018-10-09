var _ScormUtility = (function(){
    return{
     GetBookMark:function() {
        var bookmark = scorm.get("cmi.location");
        return bookmark;
    },

    setBookMark:function(bookmark) {
		
        var setlessonLocation = scorm.set("cmi.location", bookmark + "" );
    },

    saveScormData :function(){

    },

    getScormData:function(){

    },

    scormcomplete:function(){
        
    }


}
});