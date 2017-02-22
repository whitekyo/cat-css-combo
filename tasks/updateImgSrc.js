/**
 * Created by YANGCHENG897 on 2017-02-22.
 */
/**
 *
 * @param source_file_path  目标文件路径
 */
module.exports = function(grunt){
    //执行路径
    var execute_root = __dirname;


};


//读取目标文件内容
function read_source_file(source_file_paths){
    var single_file_path;
    for(var i = 0; i < source_file_paths.length; i++){
        single_file_path = source_file_paths[i];
    }
}

//替换文本
function replace_file_src(file_path, target_file_path){
    var str = grunt.file.read(file_path);
    analysis_text(str, file_path, target_file_path);
}

//解析文本
function analysis_text(content, current_file_path, target_file_path){
    var reg = /url\((.*?)\)/g;
    if(!grunt.file.exists(target_file_path)){
        /* 没有则创建 */
        grunt.file.mkdir(target_file_path);
    }
    grunt.file.write(target_file_path, deal_relative_path(content, current_file_path));
}

//创建目标地址
function create_target_src(){
    
}

function deal_relative_path(content, path){
    if(path.indexOf('/') >= 0){

    }else{
        /* test.png */
        return content;
    }
}

read_source_file(["./css/test.css"]);


