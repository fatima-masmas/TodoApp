<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Doctrine\ORM\EntityManagerInterface;
use App\Repository\TodoRepository;

// https://127.0.0.1:8000/api/todo/read
    
    #[Route('/api/todo', name: 'app_todo')]
    
class TodoController extends AbstractController
{
    private $entityManager;
    private $todoRepository;


    public function __construct(EntityManagerInterface $entityManager, TodoRepository $todoRepository) {
        $this->entityManager = $entityManager;
        
        $this->todoRepository = $todoRepository;
    }
     
    #[Route('/read', name: 'app_todo')]
    
 
    public function index(): Response
    {

       
        $todos = $this->todoRepository->findAll();
        $arrayOfTodos = [];
        foreach ($todos as $todo) {
            $arrayOfTodos[] = $todo->toArray();
        }
        return $this->json($arrayOfTodos);

    /** 
    *    return $this->render('todo/index.html.twig', [
     *       'controller_name' => 'TodoController',
      *  ]);
        
        */
    }
}
