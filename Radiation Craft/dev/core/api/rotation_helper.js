var rotationHelper = {
 
 forC4: function(x, y, z, id, texture, rotate){

        let render = new ICRender.Model();
        let model = BlockRenderer.createModel();

        if(rotate == 0){ //up
            model.addBox(0/16, 0/16, 0/16, 16/16, 1/16, 16/16, [["dynamo_" + texture, 1], ["dynamo_" + texture, 1], ["dynamo_" + texture, 0]]);
        }else if(rotate == 1){ //bottom
            model.addBox(0, 0.39, 0, 1, 1, 1, [["dynamo_" + texture, 1], ["dynamo_" + texture, 1], ["dynamo_" + texture, 2]]);
        }else if(rotate == 2){
            model.addBox(0, 0, 0, 0.625, 1, 1, [["dynamo_" + texture, 3], ["dynamo_" + texture, 3], ["dynamo_" + texture, 3], ["dynamo_" + texture, 3], ["dynamo_" + texture, 1]]);
        }else if(rotate == 3){
            model.addBox(0.38, 0, 0, 1, 1, 1, [["dynamo_" + texture, 4], ["dynamo_" + texture, 4], ["dynamo_" + texture, 4], ["dynamo_" + texture, 4], ["dynamo_" + texture, 1]]);
        }else if(rotate == 4){
            model.addBox(0, 0, 0.38, 1, 1, 1, [["dynamo_" + texture, 0], ["dynamo_" + texture, 0], ["dynamo_" + texture, 1], ["dynamo_" + texture, 1], ["dynamo_" + texture, 4]]);
        }else if(rotate == 5){
            model.addBox(0, 0, 0, 1, 1, 0.625, [["dynamo_" + texture, 2], ["dynamo_" + texture, 2], ["dynamo_" + texture, 1], ["dynamo_" + texture, 1], ["dynamo_" + texture, 3]]);
        }

        render.addEntry(model);
        BlockRenderer.enableCoordMapping(id, -1, render);
        BlockRenderer.mapAtCoords(x, y, z, render);
}
};