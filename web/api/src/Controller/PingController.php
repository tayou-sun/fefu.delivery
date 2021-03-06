<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class PingController extends AbstractController
{
    /**
     * @Route("/ping", name="ping")
     */
    public function index()
    {
        return $this->json([
            'message' => 'pong',
        ]);
    }
}
