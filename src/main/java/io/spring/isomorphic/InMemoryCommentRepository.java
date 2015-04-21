/*
 * Copyright 2002-2015 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package io.spring.isomorphic;

import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.ConcurrentMap;
import java.util.concurrent.atomic.AtomicLong;

import org.springframework.stereotype.Repository;

@Repository
public class InMemoryCommentRepository implements CommentRepository {

	private static AtomicLong counter = new AtomicLong();

	private final ConcurrentMap<Long, Comment> comments = new ConcurrentHashMap<Long, Comment>();

	@Override
	public Iterable<Comment> findAll() {
		return this.comments.values();
	}

	@Override
	public Comment save(Comment comment) {
		Long id = comment.getId();
		if (id == null) {
			id = counter.incrementAndGet();
			comment.setId(id);
		}
		this.comments.put(id, comment);
		return comment;
	}

	@Override
	public Comment find(Long id) {
		return this.comments.get(id);
	}



}
