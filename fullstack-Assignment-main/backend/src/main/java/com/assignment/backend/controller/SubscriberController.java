package com.assignment.backend.controller;

import com.assignment.backend.model.Subscriber;
import com.assignment.backend.repository.SubscriberRepository;
import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/subscribe")
public class SubscriberController {
    private final SubscriberRepository subscriberRepository;

    public SubscriberController(SubscriberRepository subscriberRepository) {
        this.subscriberRepository = subscriberRepository;
    }

    @PostMapping
    public Subscriber subscribe(@Valid @RequestBody Subscriber subscriber) {
        subscriber.setEmail(subscriber.getEmail().trim().toLowerCase());
        return subscriberRepository.findByEmail(subscriber.getEmail())
                .orElseGet(() -> subscriberRepository.save(subscriber));
    }

    @GetMapping
    public List<Subscriber> getAllSubscribers() {
        return subscriberRepository.findAll();
    }
}
