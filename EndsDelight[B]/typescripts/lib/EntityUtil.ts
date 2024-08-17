import { Direction, Entity, EntityQueryOptions, GameMode, Player } from "@minecraft/server";


export class EntityUtil {
    //检测传入的玩家是否为非创造模式
    public static gameMode(player: Entity) {
        const query: EntityQueryOptions = {
            type: "minecraft:player",
            name: player.nameTag,
            location: player.location,
            gameMode: GameMode.creative
        }
        const entities = player.dimension.getEntities(query);
        return !entities.length;
    }
    //获取玩家二维朝向
    public static cardinalDirection(player: Entity, yOffset: number = 0) {
        const rot = player.getRotation();
        let rotY = rot.y + yOffset;
        if (rotY > 180) rotY -= 360;
        if (-45 <= rotY && rotY < 45) {
            return Direction.North;
        }
        else if (45 <= rotY && rotY < 135) {
            return Direction.East;
        }
        else if (-135 <= rotY && rotY < -45) {
            return Direction.West;
        }
        else if (135 <= rotY || rotY < -135) {
            return Direction.South;
        }
    }
}