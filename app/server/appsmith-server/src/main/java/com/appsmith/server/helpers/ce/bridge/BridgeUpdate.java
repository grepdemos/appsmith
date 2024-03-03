package com.appsmith.server.helpers.ce.bridge;

import com.querydsl.core.types.Path;
import lombok.Getter;

import java.util.ArrayList;
import java.util.List;

@Getter
public class BridgeUpdate {
    private final List<SetOp> setOps = new ArrayList<>();

    public BridgeUpdate set(Path<?> key, Object value) {
        setOps.add(new SetOp(key, value));
        return this;
    }

    public BridgeUpdate set(String key, Object value) {
        setOps.add(new SetOp(key, value));
        return this;
    }

    public record SetOp(Object key, Object value) {}
}