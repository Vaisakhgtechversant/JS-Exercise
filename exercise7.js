function validateGL(glConfig, glSegments){
    for(const i in glConfig){
        const type = glConfig[i].type; 
        const value = glSegments[i]; 
        if(type === "REQUIRED" && value === "") return false;
        if(value.length > i.length) return false;
    }
    return true; 
}

const GLConfig = {
    CO: { type: "REQUIRED" },
    MAJ: { type: "NORMAL" },
    SET: { type: "NORMAL" },
    MIN: { type: "REQUIRED" }
};

const GLSegments = {
    CO: "1",
    MAJ: "111",
    SET: "111",
    MIN: "000"
};

const result = validateGL(GLConfig, GLSegments);
console.log(result);
